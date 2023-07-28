import React, {useState} from "react";
import Sider from "antd/es/layout/Sider";
import "./index.less";
import favicon from "@/assets/images/favicon.png";
import {Image, Menu, Spin} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {HomeOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

const LeftMenu: React.FC = () => {
  const navigate = useNavigate();
  // 通过useSelector直接拿到store中定义的value
  const {collapse} = useSelector((store: any) => store.global);
  const [isCollapse, setCollapse] = useState(collapse);
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
      collapsed={isCollapse}
      collapsible
    >
      <Link to="/home">
        <div className="hd-64 mgr-01 dis-fl ai-ct jc-ct">
          <Image width={25} src={favicon} preview={false}/>
          {<p style={{
            fontWeight: 'bold',
            margin: '0 12px',
            fontSize: '20px',
            color: '#1890ff'
          }}>
            integration
          </p>
          }
        </div>
      </Link>
      <Spin wrapperClassName="side-menu" spinning={false} tip="Loading...">
        <Menu
          mode="inline"
          theme="light"
          items={
            [
              {
                key: "home",
                label: "首页",
                icon: <HomeOutlined/>,
                onClick: () => navigate('/home')
              },
              {
                key: "emr",
                label: "关于",
                // onClick: () => navigate('/emr'),
                children: [
                  {
                    key: "home2",
                    label: "emr",
                    icon: <HomeOutlined/>,
                    onClick: () => navigate('/emr')
                  }
                ]
              },
              {
                key: "login",
                label: "登陆",
                onClick: () => navigate('/login')
              },
            ]
          }/>
      </Spin>
    </Sider>
  )
}
export default LeftMenu;