import {useRoutes} from "react-router-dom";
import React, {Suspense} from 'react'
import {Spin} from "antd";

const lazyLoad = (moduleName: string) => {
  const viteModule = import.meta.glob('../**/*.tsx');
  //组件地址
  let URL = "";
  if (moduleName === "layouts") {
    URL = `../layouts/index.tsx`;
  } else if (moduleName.endsWith(".tsx")) {
    URL = `../pages/${moduleName}`;
  } else {
    URL = `../pages/${moduleName}/index.tsx`;
  }
  const Module = React.lazy(viteModule[`${URL}`] as any);
  return (
    <Module/>
  );
}

const routes = [
  {
    path: '/',
    auth: false,
    component: React.lazy(() => import("@/layouts")),
    children: [
      {
        path: "home",
        auth: false,
        component: lazyLoad('Home').type
      },
      {
        path: "system/menu",
        auth: false,
        component: lazyLoad('system/Menu').type
      },
      {
        path: "emr/designCenter",
        auth: false,
        component: lazyLoad('emr/DesignCenter').type
      },
      {
        path: '*',
        auth: false,
        component: lazyLoad('404.tsx').type
      }
    ]
  },
  {
    path: '/login',
    auth: false,
    component: lazyLoad('Login').type
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
      <item.component/>
    </Suspense>;
    {/* 把懒加载的异步路由变成组件装载进去 */
    }
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