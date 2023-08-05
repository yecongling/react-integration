import React, {useState} from "react";
import {Button, Col, ColorPicker, ColorPickerProps, Divider, Drawer, Row, Space, Switch} from "antd";
import {CloseOutlined, SettingOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {setColorPrimary, setTheme} from "@/store/modules/global.ts";


/* 系统配置界面 */
const Setting: React.FC = () => {
  const dispatch = useDispatch();
  const [open, changeOpen] = useState(false);
  const [right, setRight] = useState(0);
  const {colorPrimary} = useSelector((store: any) => store.global);
  const [value, setValue] = useState<ColorPickerProps['value']>(colorPrimary);
  const changeDrawer = () => {
    changeOpen(!open);
    if (!open) {
      setRight(330);
    } else {
      setRight(0);
    }
  }

  /**
   * 改变主题
   * @param checked
   */
  const changeTheme = (checked: boolean) => {
    dispatch(setTheme({theme: checked ? 'light' : 'dark'}));
  }

  return (
    <>
      <Button type="primary" size="small" onClick={changeDrawer}
              style={{
                width: '42px',
                height: '42px',
                zIndex: '1001',
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
          <Row>
            <Col span={6} style={{
              textAlign: 'right',
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "end"
            }}>
              侧边栏
            </Col>
            <Col span={17} offset={1}>
              <Switch checkedChildren="明亮" unCheckedChildren="黑暗" defaultChecked
                      onChange={(checked) => changeTheme(checked)}/>
            </Col>
          </Row>
          <Row>
            <Col span={6} style={{
              textAlign: 'right',
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "end"
            }}>
              主题
            </Col>
            <Col span={17} offset={1}>
              <ColorPicker
                value={value}
                allowClear
                onChangeComplete={(color) => {
                  setValue(color);
                  dispatch(setColorPrimary({colorPrimary: color.toHexString()}))
                }}
                onClear={() => {
                  dispatch(setColorPrimary({colorPrimary}))
                }}
              />
            </Col>
          </Row>
        </Space>
      </Drawer>
    </>
  )
}

export default Setting;