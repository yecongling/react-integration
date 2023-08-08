import React, {useRef} from "react";
import {Button, Form, Input, InputRef, Modal, Select} from "antd";
import {ArrowLeftOutlined, CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {ProjectInfoProps} from "@/pages/project/ProjectMaintain/components/ProjectState.ts";

const ProjectInfo: React.FC<ProjectInfoProps> = (props) => {
  const inputRef = useRef<InputRef>(null);
  const navigate = useNavigate();
  const {open, setOpen, isEdit, changeModal, projectName, editInfo, projectData} = props;

  /**
   * 窗口打开关闭
   * @param open
   */
  const handleAfterOpen = (open: boolean) => {
    if (open) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }
    if (projectName.current) {
      projectName.current.focus();
    }
  }

  /**
   * 关闭弹窗
   */
  const onCancel = () => {
    setOpen(false);
  }

  /**
   * 保存数据
   */
  const handleOk = () => {
    // 先完成数据存储操作
    if (!isEdit) {
      // 如果是新增，则新增完成就跳转到设计界面
      navigate('/project/projectMaintain/designer');
    }
  }

  return (
    <>
      <Modal open={open}
             centered
             maskClosable={false}
             title={<> {!isEdit && <Button size="middle" style={{marginRight: '12px'}} icon={<ArrowLeftOutlined/>}
                                           onClick={() => changeModal("3")}></Button>}
               <span className="title">{editInfo.opr}{editInfo.title}项目</span></>}
             okText="确认"
             okButtonProps={{icon: <CheckCircleOutlined/>}}
             cancelButtonProps={{icon: <CloseCircleOutlined/>}}
             cancelText="取消"
             style={{top: '20px'}}
             width={800}
             onOk={() => {
               projectData.validateFields().then(() => {
                 projectData.resetFields();
                 handleOk();
               });
             }}
             onCancel={onCancel}
             afterOpenChange={handleAfterOpen}
             bodyStyle={{padding: '10px 40px'}}
      >
        <Form
          form={projectData}
          layout="horizontal"
          name="basic"
          size="middle"
          labelCol={{span: 4}}
          initialValues={{
            level: '0',
            log: '1'
          }}
        >
          <Form.Item name="projectName" label="项目名称" rules={[{required: true, message: '请输入项目名称'}]}>
            <Input ref={inputRef} placeholder="项目名称"/>
          </Form.Item>
          <Form.Item name="description" label="描述">
            <Input.TextArea rows={4} placeholder="描述"/>
          </Form.Item>
          {editInfo.projectType === '1' ?
            <Form.Item name="log" label="消息日志记录">
              <Select options={[
                {value: '1', label: '打开'},
                {value: '2', label: '关闭'},
                {value: '3', label: '仅在发生错误是记录'}
              ]}/>
            </Form.Item> : ''}
          <Form.Item name="level" label="优先级" rules={[{required: true, message: '请输入项目名称'}]}>
            <Select placeholder="项目名称" options={[
              {value: '0', label: '0'},
              {value: '1', label: '1'},
              {value: '2', label: '2'},
              {value: '3', label: '3'},
              {value: '4', label: '4'},
              {value: '5', label: '5'},
            ]}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default ProjectInfo;