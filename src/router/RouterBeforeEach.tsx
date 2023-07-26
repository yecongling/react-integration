import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {checkRouterAuth} from './index'
import React, {useEffect} from 'react'

const RouterBeforeEach: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const obj = checkRouterAuth(location.pathname)
    const blLogin = sessionStorage.getItem('login')
    // if (obj && obj.auth && blLogin == 'false') {
    //   navigate('/login', {replace: true})
    // } else {
      navigate("/");
    // }
  }, [])
  return <Outlet/>
}
export default RouterBeforeEach