import React from "react";
import {Button, Card, Col, Input, Modal, Row, Tabs, TabsProps, Tag} from "antd";
import './index.less';
import {useLocation, useNavigate} from "react-router-dom";
import {ClearOutlined, CompressOutlined, FullscreenOutlined, SaveOutlined} from "@ant-design/icons";

const Designer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, contextHolder] = Modal.useModal();
  const items: TabsProps['items'] = [
    {
      key: "service",
      label: "服务",
      children: <>终端</>,
    },
    {
      key: "route",
      label: "路由",
      children: <>路由</>
    },
    {
      key: "trigger",
      label: "触发器",
      children: <>触发器</>
    }
  ]
  return (
    <>
      {contextHolder}
      <Card className="designer" bodyStyle={{height: '100%', padding: '6px'}}>
        <Row style={{height: '100%'}}>
          <Col span={4} className="designer-left" style={{padding: '10px'}}>
            <Input.Search autoFocus placeholder="通过名称检索" enterButton onSearch={() => alert("检索")}/>
            <Tabs type="card" tabBarStyle={{marginTop: '6px'}} items={items} tabBarGutter={-1}
                  className="tab-operator"/>
          </Col>
          <Col span={20} className="designer-right">
            <Row className="designer-toolbar">
              <Col span={2} style={{paddingLeft: '6px'}}>
                <Button type="primary" title="保存" icon={<SaveOutlined/>} onClick={() => alert("保存")}/>
                <Button type="primary" title="清空编辑器" danger icon={<ClearOutlined/>} style={{marginLeft: '6px'}}
                        onClick={() => {
                          modal.confirm({title: "确认清空编辑器内容吗？", onOk: () => alert("确认清空编辑器")})
                        }}/>
              </Col>
              <Col span={20} style={{textAlign: 'center'}}>
                <Tag color="#108ee9" style={{
                  fontSize: '14px',
                  padding: '5px 7px'
                }}>{location.state.projectName} - {location.state.projectType === 1 ?
                  <CompressOutlined style={{fontSize: '16px'}}/> :
                  <FullscreenOutlined style={{fontSize: '16px'}}/>}</Tag>
              </Col>
              <Col span={2} style={{textAlign: 'right'}}>
                <Button type="primary" onClick={() => {
                  navigate('/engine/project/projectMaintain')
                }}>返回</Button>
              </Col>
            </Row>
            <Row className="designer-content">
              <Col span={24} className="designer-area">
                使用apache camel 实现系统见集成
              </Col>
            </Row>

          </Col>
        </Row>
      </Card>
    </>
  )
}
export default Designer;