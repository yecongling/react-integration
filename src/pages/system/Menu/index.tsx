import React, {useEffect, useRef, useState} from "react";
import {Button, Card, Col, Form, Input, InputRef, Row, Select, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import * as Icons from "@ant-design/icons";
import {PlusOutlined} from "@ant-design/icons";
import './menu.less';
import MenuInfoModal from "@/pages/system/Menu/components/MenuInfoModal";
import {permission} from "@/services/system/permission/menuModel";
import {getAllPermission} from "@/services/system/permission/permission";
import {handlePermission} from "@/utils/util.ts";

/**
 * 菜单维护界面
 * @constructor
 */
const Menu: React.FC = () => {

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const menuName = useRef<InputRef>(null);
  // 表格数据
  const [tableData, setTableData] = useState<permission[]>([]);
  const [menuData] = Form.useForm();

  useEffect(() => {
    // @ts-ignore
    menuName.current && menuName.current.focus();
    getAllMenus();
  }, []);

  const onFinish = (value: any) => {
    alert(value);
  }


  /**
   * 编辑
   * @param value
   */
  const edit = (value: any) => {
    console.log(value);
    setOpen(true);
  }

  /**
   * 删除
   * @param value
   */
  const del = (value: any) => {
    console.log(value)
    alert('删除')
  }

  /**
   * 新增
   */
  const add = () => {
    setOpen(true);
  }

  /**
   * 关闭弹窗
   */
  const onCancel = () => {
    setOpen(false);
  }

  /**
   * 字段校验
   *
   * @param values
   */
  const handleOk = async (values: permission) => {
    console.log(values)
  }

  // 动态渲染 Icon 图标
  const customIcons: { [key: string]: any } = Icons;
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name]);
  };

  const getAllMenus = async () => {
    const formData = form.getFieldsValue();
    const result = await getAllPermission(formData);
    if (result) {
      const tableData: permission[] = [...result.data];
      // 处理数据，当children没有时不要这个节点
      handlePermission(tableData);
      setTableData(tableData);
    }
  }

  // 定义列
  const columns: ColumnsType<permission> = [
    {
      title: '菜单名称',
      dataIndex: 'name',
      key: 'name',
      width: '12%'
    },
    {
      title: '菜单类型',
      dataIndex: 'menuType',
      key: 'menuType',
      width: '5%',
      align: 'center',
      render: (text) => {
        return text === '0' ? "目录" : "一级菜单"
      }
    },
    {
      title: '图标',
      dataIndex: 'icon',
      width: '5%',
      key: 'icon',
      align: 'center',
      render: (text) => {
        return addIcon(text);
      }
    },
    {
      title: '组件',
      dataIndex: 'component',
      key: 'component',
      width: '12%',
    },
    {
      title: '路径',
      dataIndex: 'url',
      key: 'url',
      width: '12%',
    },
    {
      title: '排序',
      dataIndex: 'sortNo',
      key: 'sortNo',
      width: '5%',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: '10%',
      align: 'center',
      render: (_text, record) => (
        <Space size="small">
          <Button type="primary" size="small" onClick={() => edit(record)}>编辑</Button>
          <Button type="primary" size="small" danger onClick={() => del(record)}>删除</Button>
        </Space>
      )
    },
  ];

  return (
    <>
      {/* 查询区域 */}
      <Card>
        <Form form={form} onFinish={onFinish} initialValues={{menu_type: '-1'}}>
          <Row gutter={24}>
            <Col span={4}>
              <Form.Item label="菜单名称" name="name" initialValue="" style={{marginBottom: 0}}>
                <Input autoFocus ref={menuName} autoComplete="false"/>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="菜单类型" name="menu_type" style={{marginBottom: 0}}>
                <Select options={[
                  {value: '-1', label: '所有'},
                  {value: '0', label: '一级菜单'},
                  {value: '1', label: '字菜单'},
                  {value: '2', label: '按钮'}
                ]}/>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="显示" name="show" initialValue="-1" style={{marginBottom: 0}}>
                <Select options={[
                  {value: '-1', label: '所有'},
                  {value: '1', label: '显示'},
                  {value: '0', label: '隐藏'}
                ]}/>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button htmlType="reset" style={{margin: '0 8px'}}>重置</Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card style={{marginTop: '6px'}}>
        <Button type="primary" onClick={add}><PlusOutlined/>新增</Button>
        <Table
          style={{marginTop: '6px'}}
          className="table"
          bordered
          size="middle"
          columns={columns}
          dataSource={tableData}
        />
      </Card>
      {/* 编辑弹窗 */}
      <MenuInfoModal open={open} onCancel={onCancel} menuData={menuData} handleOk={handleOk}/>
    </>

  )
}

export default Menu;