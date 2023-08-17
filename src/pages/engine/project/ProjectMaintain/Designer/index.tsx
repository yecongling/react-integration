import React from "react";
import {Button, Card, Col, Input, Modal, Row, Space, Tabs, TabsProps, Tag} from "antd";
import './index.less';
import {useLocation, useNavigate} from "react-router-dom";
import {ClearOutlined, CompressOutlined, FullscreenOutlined, RollbackOutlined, SaveOutlined} from "@ant-design/icons";

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
    },
    {
      key: "timer",
      label: "定时器",
      children: <>触发器</>
    }
  ]
  return (
    <>
      {contextHolder}
      <Row style={{height: '100%'}} gutter={6}>
        <Col span={4}>
          <Card style={{height: '100%'}} bodyStyle={{padding: '10px'}}>
            <Input.Search autoFocus placeholder="通过名称检索" enterButton onSearch={() => alert("检索")}/>
            <Tabs tabBarStyle={{marginTop: '6px'}} items={items}/>
          </Card>
        </Col>
        <Col span={20}>
          <Row className="designer-toolbar">
            <Card style={{height: '44px', width: '100%', paddingRight: '20px'}}
                  bodyStyle={{display: 'flex', height: '100%', alignItems: 'center'}}>
              <Col span={10} style={{textAlign: 'center'}}>
                <Tag color="#108ee9" style={{
                  fontSize: '14px',
                  padding: '5px 7px'
                }}>{location.state.projectName} - {location.state.projectType === 1 ?
                  <CompressOutlined style={{fontSize: '16px'}}/> :
                  <FullscreenOutlined style={{fontSize: '16px'}}/>}</Tag>
              </Col>
              <Col span={14} style={{textAlign: 'right'}}>
                <Space>
                  <Button type="primary" title="保存" icon={<SaveOutlined/>} onClick={() => alert("保存")}>保存</Button>
                  <Button type="primary" title="清空编辑器" danger icon={<ClearOutlined/>}
                          onClick={() => {
                            modal.confirm({title: "确认清空编辑器内容吗？", onOk: () => alert("确认清空编辑器")})
                          }}>清空</Button>
                  <Button type="primary" icon={<RollbackOutlined/>} onClick={() => {
                    navigate('/engine/project/projectMaintain')
                  }}>返回</Button>
                </Space>
              </Col>
            </Card>
          </Row>
          <Row className="designer-content" style={{height: 'calc(100% - 50px)', marginTop: '6px'}}>
            <Col span={24} className="designer-area" style={{height: '100%'}}>
              <Card style={{height: '100%'}} bodyStyle={{height: '100%', padding: '10px'}}>
                使用apache camel 实现系统见集成
              </Card>

            </Col>
          </Row>

        </Col>
      </Row>
    </>
  );
}
export default Designer;