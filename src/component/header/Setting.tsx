import React, {useState} from "react";
import {Button, Divider, Drawer, Space, Switch} from "antd";
import {CloseOutlined, SettingOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {setColorPrimary, setTheme} from "@/store/modules/global.ts";


/* 系统配置界面 */
const Setting: React.FC = () => {
  const dispatch = useDispatch();
  const [open, changeOpen] = useState(false);
  const [right, setRight] = useState(0);
  const changeDrawer = () => {
    changeOpen(!open);
    if (!open) {
      setRight(330);
    } else {
      setRight(0);
    }
  }

  return (
    <>
      <Button type="primary" size="small" onClick={changeDrawer}
              style={{
                width: '42px',
                height: '42px',
                zIndex: '2000',
                top: '40%',
                position: 'fixed',
                transition: 'all 0.3s',
                right: `${right}` + 'px'
              }}>
        {open ? <CloseOutlined style={{fontSize: '18px'}}/> : <SettingOutlined style={{fontSize: '18px'}}/>}
      </Button>
      <Drawer title="主题配置" placement="right" open={open} closable={false} width={330}>
        <Divider><strong>主题模式</strong></Divider>
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked onChange={(checked) => {
            dispatch(setTheme({theme: checked ? 'light' : 'dark'}));
          }}/>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked onChange={(checked) => {
            dispatch(setColorPrimary({colorPrimary: checked ? '#1890ff' : '#00b96b'}))
          }}/>
        </Space>
      </Drawer>
    </>
  )
}

export default Setting;