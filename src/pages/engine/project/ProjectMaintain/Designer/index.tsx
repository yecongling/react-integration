import React, {useState} from "react";
import {Button, Card, Col, Input, List, notification, Row, Space, Tabs, TabsProps, Tag} from "antd";
import './index.less';
import {useLocation, useNavigate} from "react-router-dom";
import {
  CompressOutlined,
  DeleteOutlined,
  ExportOutlined,
  FlagOutlined,
  FullscreenOutlined,
  ImportOutlined,
  MenuOutlined,
  PlusOutlined,
  RedoOutlined,
  RollbackOutlined,
  SaveOutlined,
  SettingOutlined,
  TableOutlined,
  UndoOutlined
} from "@ant-design/icons";
import Setting from "@/pages/engine/project/ProjectMaintain/Designer/Setting";
import Endpoint from "@/pages/engine/project/ProjectMaintain/Designer/components/server/Endpoint";

const Designer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [notifyPanel, contextHolder] = notification.useNotification();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openEndpointModal, setOpenEndpointModal] = useState(false);
  const items: TabsProps['items'] = [
    {
      key: "service",
      label: "服务",
      children: <>
        <List
          header={<div>web服务<Button size="small" icon={<PlusOutlined/>} onClick={() => {
            setOpenEndpointModal(true)
          }}/></div>}
          footer={null}
          dataSource={['web服务']}
          renderItem={(item) => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </>,
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
      children: <>定时器</>
    }
  ]

  /**
   * 点击面板
   */
  const clickPanel = () => {
    notifyPanel.success({
      message: "运行成功",
      description: <>这是一个运行成功的面板</>
    })
  }

  return (
    <>
      {contextHolder}
      <Endpoint open={openEndpointModal} onCancel={() => setOpenEditModal(false)}/>
      <Row style={{height: '100%'}} gutter={6}>
        <Col span={4}>
          <Card style={{height: '100%'}} bodyStyle={{padding: '10px', height: '100%'}}>
            <Input.Search autoFocus placeholder="通过名称检索" enterButton onSearch={() => alert("检索")}/>
            <Tabs tabBarStyle={{marginTop: '6px'}} items={items}/>
          </Card>
        </Col>
        <Col span={20}>
          <Row className="designer-toolbar">
            <Card style={{height: '44px', width: '100%', paddingRight: '20px'}}
                  bodyStyle={{display: 'flex', height: '100%', alignItems: 'center', padding: '0'}}>
              <Col span={10} style={{paddingLeft: '20px'}}>
                <Space.Compact>
                  <Button type="default" icon={<UndoOutlined/>} disabled>撤销</Button>
                  <Button type="default" icon={<RedoOutlined/>} disabled>恢复</Button>
                  <Button type="default" icon={<DeleteOutlined/>}>清空</Button>
                  <Button type="default" icon={<FlagOutlined/>}>标尺</Button>
                  <Button type="default" icon={<TableOutlined/>}>网格</Button>
                </Space.Compact>
              </Col>
              <Col span={4} style={{textAlign: 'center'}}>
                <Tag color="magenta" style={{
                  fontSize: '14px',
                  padding: '5px 7px'
                }}>{location.state.projectName} - {location.state.projectType === 1 ?
                  <CompressOutlined style={{fontSize: '16px'}}/> :
                  <FullscreenOutlined style={{fontSize: '16px'}}/>}</Tag>
              </Col>
              <Col span={10} style={{textAlign: 'right'}}>
                <Space>
                  <Button type="primary" title="界面设计" icon={<SettingOutlined/>}
                          onClick={() => setOpenEditModal(true)}/>
                  <Button type="primary" title="保存" icon={<SaveOutlined/>} onClick={() => alert("保存")}>保存</Button>
                  <Button type="primary" title="导入流程" icon={<ImportOutlined/>}
                          onClick={() => alert("导入")}>导入</Button>
                  <Button type="primary" title="导出流程" icon={<ExportOutlined/>}
                          onClick={() => alert("导出")}>导出</Button>
                  <Button type="primary" icon={<RollbackOutlined/>} onClick={() => {
                    navigate('/engine/project/projectMaintain')
                  }}>返回</Button>
                  <Button type="default" icon={<MenuOutlined/>} title="面板" onClick={clickPanel}/>
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
      <Setting open={openEditModal} onOk={() => setOpenEditModal(false)} onCancel={() => setOpenEditModal(false)}/>
    </>
  );
}
export default Designer;