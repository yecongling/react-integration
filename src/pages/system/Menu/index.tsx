import React, {useRef, useState} from "react";
import {Button, Card, Col, Form, Input, InputNumber, Modal, Radio, Row, Select, Space, Switch, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import * as Icons from "@ant-design/icons";
import {CheckCircleOutlined, CloseCircleOutlined, PlusOutlined, SettingOutlined} from "@ant-design/icons";
import './menu.less';

/**
 * 菜单维护界面
 * @constructor
 */
const Menu: React.FC = () => {

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [menuData] = Form.useForm();
  const inputRef = useRef(null);
  const menuType = [
    {label: '一级菜单', value: 1},
    {label: '子菜单', value: 2},
    {label: '按钮/权限', value: 3},
  ];
  const onFinish = (value: any) => {
    alert(value);
  }

  const handleAfterOpen = (open: boolean) => {
    if (open && inputRef.current) {
      // @ts-ignore
      inputRef.current.focus();
    }
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

  interface menuType {
    key: React.ReactNode;
    name: string;
    menu_type: number;
    icon: string;
    component: string;
    url: string;
    sort_no: number;
    children?: menuType[];
  }

  // 动态渲染 Icon 图标
  const customIcons: { [key: string]: any } = Icons;
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name]);
  };
  // 定义列
  const columns: ColumnsType<menuType> = [
    {
      title: '菜单名称',
      dataIndex: 'name',
      key: 'name',
      width: '12%'
    },
    {
      title: '菜单类型',
      dataIndex: 'menu_type',
      key: 'menu_type',
      width: '5%',
      align: 'center',
      render: (text) => {
        return text === 1 ? "目录" : "一级菜单"
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
      dataIndex: 'sort_no',
      key: 'sort_no',
      width: '5%',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'sort_no',
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

  // 模拟数据
  const data: menuType[] = [
    {
      key: 1,
      name: '首页',
      menu_type: 1,
      icon: 'HomeOutlined',
      component: '/Home',
      url: '/home',
      sort_no: 2,
    },
    {
      key: 2,
      name: '系统管理',
      menu_type: 1,
      icon: 'SettingOutlined',
      component: '/system',
      url: '/system',
      sort_no: 2,
      children: [
        {
          key: 3,
          name: '菜单管理',
          menu_type: 2,
          icon: 'MenuOutlined',
          component: '/system/Menu',
          url: '/system/menu',
          sort_no: 3
        },
        {
          key: 4,
          name: '角色管理',
          menu_type: 2,
          icon: 'UsergroupDeleteOutlined',
          component: '/system/Role',
          url: '/system/role',
          sort_no: 3
        },
        {
          key: 5,
          name: '用户管理',
          menu_type: 2,
          icon: 'UserOutlined',
          component: '/system/User',
          url: '/system/user',
          sort_no: 3
        }
      ]
    }, {
      key: 6,
      name: '系统管理',
      menu_type: 1,
      icon: 'SettingOutlined',
      component: '/system',
      url: '/system',
      sort_no: 2,
      children: [
        {
          key: 7,
          name: '菜单管理',
          menu_type: 2,
          icon: 'MenuOutlined',
          component: '/system/Menu',
          url: '/system/menu',
          sort_no: 3
        },
        {
          key: 8,
          name: '角色管理',
          menu_type: 2,
          icon: 'UsergroupDeleteOutlined',
          component: '/system/Role',
          url: '/system/role',
          sort_no: 3
        },
        {
          key: 9,
          name: '用户管理',
          menu_type: 2,
          icon: 'UserOutlined',
          component: '/system/User',
          url: '/system/user',
          sort_no: 3
        }
      ]
    }
  ];

  return (
    <>
      {/* 查询区域 */}
      <Card>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={24}>
            <Col span={4}>
              <Form.Item label="菜单名称" name="name" initialValue="" style={{marginBottom: 0}}>
                <Input autoFocus autoComplete="false"/>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="菜单类型" name="menu_type" initialValue="" style={{marginBottom: 0}}>
                <Input autoComplete="false"/>
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
          scroll={{x: 'max-content', y: 'calc(100vh - 400px)'}}
          bordered
          size="middle"
          columns={columns}
          dataSource={data}
        />
      </Card>
      {/* 编辑弹窗 */}
      <Modal open={open}
             centered
             maskClosable={false}
             title="编辑菜单数据"
             okText="确认"
             okButtonProps={{icon: <CheckCircleOutlined/>}}
             cancelButtonProps={{icon: <CloseCircleOutlined/>}}
             cancelText="取消"
             style={{top: '20px'}}
             width={800}
             onCancel={onCancel}
             afterOpenChange={handleAfterOpen}
             bodyStyle={{padding: '10px 40px'}}
      >
        <Form
          form={menuData}
          layout="horizontal"
          name="basic"
          size="middle"
          labelCol={{span: 5}}
          initialValues={{
            menu_type: 1
          }}
        >
          <Form.Item name="menu_type" label="菜单类型">
            <Radio.Group>
              <Radio value={1}>一级菜单</Radio>
              <Radio value={2}>二级菜单</Radio>
              <Radio value={3}>按钮</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="name" label="菜单名称" rules={[{required: true, message: '请输入菜单名称！'}]}>
            <Input ref={inputRef} placeholder="菜单名称"/>
          </Form.Item>
          <Form.Item name="url" label="菜单路径" rules={[{required: true, message: '请输入菜单路径！'}]}>
            <Input placeholder="菜单路径"/>
          </Form.Item>
          <Form.Item name="component" label="前端组件" rules={[{required: true, message: '请输入前端组件！'}]}>
            <Input placeholder="请输入前端组件"/>
          </Form.Item>
          <Form.Item name="icon" label="菜单图标">
            <Input addonAfter={<SettingOutlined/>}/>
          </Form.Item>
          <Form.Item name="sortNo" label="序号">
            <InputNumber/>
          </Form.Item>
          <Form.Item name="route" valuePropName="checked" label="是否路由菜单">
            <Switch checkedChildren="是" unCheckedChildren="否"/>
          </Form.Item>
          <Form.Item name="hidden" valuePropName="checked" label="隐藏路由">
            <Switch checkedChildren="是" unCheckedChildren="否"/>
          </Form.Item>
          <Form.Item name="internalOrExternal" valuePropName="checked" label="打开方式">
            <Switch checkedChildren="内部" unCheckedChildren="外部"/>
          </Form.Item>
        </Form>
      </Modal>
    </>

  )
}

export default Menu;