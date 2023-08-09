import React, {useEffect, useRef, useState} from "react";
import {MenuInfoProps} from "@/pages/system/Menu/components/MenuInfoProps.ts";
import {CheckCircleOutlined, CloseCircleOutlined, SettingOutlined} from "@ant-design/icons";
import {Form, Input, InputNumber, InputRef, Modal, Radio, RadioChangeEvent, Switch, TreeSelect} from "antd";
import {getDirectoryPermission} from "@/services/system/permission/permission";
import {directory} from "@/services/system/permission/menuModel.ts";

const MenuInfoModal: React.FC<MenuInfoProps> = (props) => {
  const {open, onCancel, menuData, handleOk} = props;
  const inputRef = useRef<InputRef>(null);
  const [showParent, setShow] = useState(true);
  // 上级菜单
  const [value, setValue] = useState<string>();
  // 目录数据
  const [treeData, setTreeData] = useState<directory[]>([]);

  useEffect(() => {
    if (open) {
      getDirectory();
    }
  }, [open]);

  const handleAfterOpen = (open: boolean) => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  /**
   * 菜单类型变换
   * @param e
   */
  const changeMenuType = (e: RadioChangeEvent) => {
    if (e.target.value === 0) {
      setShow(false);
      return;
    }
    setShow(true);
  }

  /**
   * 获取目录
   */
  const getDirectory = async () => {
    const result = await getDirectoryPermission();
    if (result) {
      const treeData: directory[] = [...result.data];
      setTreeData(treeData);
    }
  }

  return (
    <>
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
             onOk={() => {
               menuData.validateFields().then((values) => {
                 menuData.resetFields();
                 handleOk(values);
               });
             }}
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
            menuType: 1,
            route: true,
            internalOrExternal: true,
            sortNo: 1
          }}
        >
          <Form.Item name="menuType" label="菜单类型">
            <Radio.Group onChange={changeMenuType}>
              <Radio value={0}>一级菜单</Radio>
              <Radio value={1}>子菜单</Radio>
              <Radio value={2}>按钮</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="name" label="菜单名称" rules={[{required: true, message: '请输入菜单名称！'}]}>
            <Input ref={inputRef} allowClear placeholder="菜单名称"/>
          </Form.Item>
          {showParent &&
            <Form.Item name="parentId" label="上级菜单" rules={[{required: true, message: '请选择上级菜单！'}]}>
              <TreeSelect
                style={{width: '100%'}}
                value={value}
                dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                treeData={treeData}
                placeholder="请选择"
                treeDefaultExpandAll
                onChange={onChange}
              />
            </Form.Item>}
          <Form.Item name="url" label="菜单路径" rules={[{required: true, message: '请输入菜单路径！'}]}>
            <Input allowClear placeholder="菜单路径"/>
          </Form.Item>
          <Form.Item name="component" label="前端组件">
            <Input allowClear placeholder="请输入前端组件"/>
          </Form.Item>
          <Form.Item name="icon" label="菜单图标">
            <Input allowClear addonAfter={<SettingOutlined/>}/>
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
export default MenuInfoModal;