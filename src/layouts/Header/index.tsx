import React from "react";
import {Layout} from "antd";

const Header: React.FC = () => {
  return (
    <Layout.Header
      className="ant-layout-header dis-fl jc-sb ai-ct"
      style={{
        padding: '0 16px 0 0',
        height: '48px',
        borderBottom: ' 1px solid #f0f1f2',
        backgroundColor: '#fff',
      }}>
      header
    </Layout.Header>
  )
}
export default Header;