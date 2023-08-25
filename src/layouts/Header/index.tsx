import React from "react";
import {Avatar, Badge, Dropdown, Image, Layout, MenuProps, Modal, Space, Tooltip} from "antd";
import {
  BellOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  GithubOutlined,
  LockOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  SyncOutlined,
  UserOutlined
} from "@ant-design/icons";
import avatar from "@/assets/images/avatar.png";
// import BreadcrumbNav from "@/components/header/BreadcrumbNav";
import FullScreen from "@/components/header/FullScreen";
import {Link, useNavigate} from "react-router-dom";
import favicon from "@/assets/images/favicon.png";
/*import Setting from "@/component/header/Setting.tsx";*/

const Header: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();
  /**
   * 跳转到github
   */
  const routeGitHub = () => {
    window.open('https://github.com/yecongling/react-integration', '_blank');
    // window.open('https://www.baidu.com', '_blank');
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '个人中心',
      icon: <UserOutlined/>,
      disabled: false
    },
    {
      key: '2',
      label: '密码修改',
      icon: <EditOutlined/>
    },
    {
      key: '3',
      label: '刷新缓存',
      icon: <SyncOutlined/>
    },
    {
      key: '4',
      label: '系统设置',
      icon: <SettingOutlined/>
    },
    {
      key: '5',
      label: '退出登录',
      icon: <LogoutOutlined/>,
      disabled: false,
      onClick: function () {
        modal.confirm({
          title: 'Confirm',
          icon: <ExclamationCircleOutlined/>,
          content: '确认退出登录吗？',
          okText: '确认',
          onOk: function () {
            // 清空token
            // setToken("");
            // 退出到登录页面
            navigate("/login");
          },
          cancelText: '取消',
        });
      }
    },
  ]

  return (
    <>
      <Layout.Header
        className="ant-layout-header dis-fl jc-sb ai-ct"
        style={{
          padding: '0 16px 0 0',
          height: '48px',
          borderBottom: ' 1px solid #f0f1f2',
          backgroundColor: '#fff',
        }}>
        <div className="dis-fl js-sb ai-ct toolbox" style={{paddingLeft: '20px'}}>
          <Link to="/home">
            <div className="hd-64 mgr-01 dis-fl ai-ct jc-ct">
              <Image width={25} src={favicon} preview={false}/>
              <p style={{
                fontWeight: 'bold',
                margin: '0 12px',
                fontSize: '20px',
                color: '#1890ff'
              }}>
                integration
              </p>
            </div>
          </Link>
        </div>
        {/*<BreadcrumbNav/>*/}
        <div className="dis-fl js-sb ai-ct toolbox">
          <Space size="large">
            <Tooltip placement="bottom" title="搜索">
              <SearchOutlined style={{cursor: 'pointer', fontSize: '18px'}}/>
            </Tooltip>
            <Tooltip placement="bottom" title="github">
              <GithubOutlined style={{cursor: 'pointer', fontSize: '18px'}} onClick={routeGitHub}/>
            </Tooltip>
            <Tooltip placement="bottom" title="锁屏">
              <LockOutlined style={{cursor: 'pointer', fontSize: '18px'}}/>
            </Tooltip>
            <Tooltip placement="bottom" title="通知">
              <Badge count={5}>
                <BellOutlined style={{cursor: 'pointer', fontSize: '18px'}}/>
              </Badge>
            </Tooltip>
            <FullScreen/>
            <Dropdown menu={{items}} placement="bottom">
              <div className="login-user" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                height: 50,
                transition: 'all 0.3s'
              }}>
                <Avatar size="default" src={avatar}/>
                <span style={{margin: '0 0 0 6px'}}>叶丛林</span>
              </div>
            </Dropdown>
          </Space>
        </div>
      </Layout.Header>
      {/*<FloatBtn/>*/}
      {/*<Setting/>*/}
      {contextHolder}
    </>
  )
}
export default Header;