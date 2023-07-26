import React from "react";
import Sider from "antd/es/layout/Sider";
import "./index.less";
const LeftMenu: React.FC = () => {
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

    </Sider>
  )
}
export default LeftMenu;