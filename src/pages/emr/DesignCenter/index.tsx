import React from "react";
import type {TabsProps} from 'antd';
import {Button, Card, Col, Row, Tabs} from "antd";
import Search from "antd/lib/input/Search";
import ITree from "@/component/emr/ITree";
import "./designer.less";
import Designer from "@/component/emr/editor/Designer";
import type {DataNode} from 'antd/es/tree';
import {ExpandOutlined, FileOutlined, FolderOpenOutlined, FormOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

const DesignCenter: React.FC = () => {
  const {colorPrimary} = useSelector((store: any) => store.global);
  const onSearchEmr = (value: string) => {
    console.log(value);
  }

  /**
   * 检索数据元
   * @param value
   */
  const onSearchData = (value: string) => {
    console.log(value)
  }

  /* 模拟数据 */
  const treeData: DataNode[] = [
    {
      title: '住院病历',
      key: '00001',
      icon: <FolderOpenOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>,
      children: [
        {
          title: '入院记录',
          key: '00002',
          icon: <FolderOpenOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>,
          children: [
            {
              title: '外科入院记录',
              key: '00003',
              icon: <FileOutlined style={{fontSize: '18px', verticalAlign: 'text-top'}}/>,
            }
          ]
        }
      ]
    },
    {
      title: '护理记录',
      key: '00005',
      icon: <FolderOpenOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>,
      children: [
        {
          title: '一般护理记录',
          key: '0006',
          icon: <FileOutlined style={{fontSize: '18px', verticalAlign: 'text-top'}}/>,
        }
      ]
    }
  ];

  const emrMetaData: DataNode[] = [
    {
      title: '卫生信息数据元',
      key: '00001',
      icon: <FolderOpenOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>,
      children: [
        {
          title: '第一个数据',
          key: '00002',
          icon: <ExpandOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>
        }
      ]
    },
    {
      title: "电子病历数据元",
      key: "00003",
      icon: <FolderOpenOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>,
      children: [
        {
          title: "住院号",
          key: "00004",
          icon: <ExpandOutlined style={{color: colorPrimary, fontSize: '18px', verticalAlign: 'text-top'}}/>,
        }
      ]
    }
  ]

  const metaDataItems: TabsProps["items"] = [
    {
      key: "props",
      label: "属性",
      children: <>属性</>
    },
    {
      key: "meta",
      label: "数据元",
      children: <ITree treeData={emrMetaData} defaultExpandAll/>
    },
    {
      key: "event",
      label: "事件",
      children: <>事件</>
    },
    {
      key: "dictionary",
      label: "字典",
      children: <>字典数据</>
    }
  ]
  return (
    <>
      {/* 划分几个区域 */}
      {/*大区域（包含编辑器的编辑区域）*/}
      <Row className="editor-panel" style={{width: '100%', height: 'calc(100%)'}} gutter={6}>
        {/* 左边的栏分类带检索 */}
        <Col span={3} className="editor-category" style={{height: '100%'}}>
          <Card style={{height: '100%'}} bodyStyle={{padding: '10px', height: '100%'}}>
            <Search autoFocus placeholder="通过名称检索" enterButton onSearch={onSearchEmr}/>
            <ITree treeData={treeData} defaultExpandAll></ITree>
          </Card>
        </Col>
        {/* 中间编辑区 */}
        <Designer/>
        {/* 最右边的数据元区域 */}
        <Col span={4} className="editor-data" style={{height: '100%'}}>
          <Card style={{height: '100%'}} bodyStyle={{padding: '10px', height: '100%'}}>
            <Search placeholder="输入编码、名称检索" enterButton onSearch={onSearchData}
                    style={{width: 'calc(100% - 40px)', marginRight: '6px'}}/>
            <Button icon={<FormOutlined/>} title="编辑数据元"/>
            <Row style={{height: 'calc(100% - 30px)'}}>
              <Col span={24}>
                <Tabs
                  tabPosition="bottom"
                  items={metaDataItems}
                  type="card"
                  defaultActiveKey="meta"
                  tabBarGutter={-1}
                  className="tab-metadata"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default DesignCenter;