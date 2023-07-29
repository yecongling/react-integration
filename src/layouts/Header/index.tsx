import React from "react";
import {Avatar, Badge, Dropdown, Layout, MenuProps, Modal, Space, Tooltip} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setCollapse} from "@/store/modules/global.ts";
import {
  BellOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  GithubOutlined,
  LockOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  SyncOutlined,
  UserOutlined
} from "@ant-design/icons";
import avatar from "@/assets/images/avatar.png";
import BreadcrumbNav from "@/component/header/BreadcrumbNav";
import FullScreen from "@/component/header/FullScreen";
import {useNavigate} from "react-router-dom";
import Setting from "@/component/header/Setting.tsx";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {collapse} = useSelector((store: any) => store.global);
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
      <span
        style={{
          cursor: 'pointer',
          fontSize: '16px'
        }}
        onClick={() => dispatch(setCollapse({collapse: !collapse}))}
        className="btnbor"
      >
          <div style={{marginLeft: '14px', padding: '10px 0'}}>
              {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </div>
      </span>
        <BreadcrumbNav/>
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
      <Setting/>
      {contextHolder}
    </>
  )
}
export default Header;