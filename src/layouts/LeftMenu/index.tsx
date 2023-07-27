import React from "react";
import Sider from "antd/es/layout/Sider";
import "./index.less";
import {Menu} from "antd";
import {useNavigate} from "react-router-dom";

const LeftMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Sider
      trigger={null}
      collapsedWidth={50}
      className="scroll ant-menu"
      style={{
        overflowX: 'hidden',
        zIndex: 1000,
        boxShadow: '2px 0 8px 0 rgba(29,35,41,.1)'
      }}
      theme="light"
      collapsed={false}
      collapsible
    >
      <Menu
        mode="vertical"
        items={
          [
            {
              key: "home",
              label: "首页",
              onClick: () => navigate('/home')
            },
            {
              key: "emr",
              label: "关于",
              onClick: () => navigate('/emr')
            },
            {
              key: "login",
              label: "登陆",
              onClick: () => navigate('/login')
            },
          ]
        }/>
    </Sider>
  )
}
export default LeftMenu;