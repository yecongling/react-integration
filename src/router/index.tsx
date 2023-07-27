import {useRoutes} from "react-router-dom";
import {lazy, Suspense} from 'react'
import {Spin} from "antd";

const routes = [
  {
    path: '/',
    auth: false,
    component: lazy(() => import('@/layouts')),
    children: [
      {
        path: "home",
        auth: false,
        component: lazy(() => import('@/pages/Home'))
      },
      {
        path: "emr",
        auth: false,
        component: lazy(() => import('@/pages/Emr'))
      }
    ]
  },
  {
    path: '/login',
    auth: false,
    component: lazy(() => import('@/pages/Login'))
  },
  {
    path: '*',
    auth: false,
    component: lazy(() => import('@/pages/404.tsx'))
  }
]

//根据路径获取路由
const checkAuth = (routers: any, path: string) => {
  for (const data of routers) {
    if (data.path == path) return data
    if (data.children) {
      const res: any = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = <Suspense fallback={<Spin size="large"/>}>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component/>
    </Suspense>
    return item
  })
}

const Router = () => useRoutes(generateRouter(routes))
const checkRouterAuth = (path: string) => {
  let auth = null
  auth = checkAuth(routes, path)
  return auth
}
export {Router, checkRouterAuth}