import React from "react";
import {Form, Input, Modal, ModalProps} from "antd";

/**
 * 服务模块
 * @constructor
 */
const Endpoint: React.FC<ModalProps> = (props) => {
  return (
    <>
      <Modal {...props} width={800} title="编辑服务">
        <Form
          layout="horizontal"
          name="basic"
          size="middle"
          labelCol={{span: 4}}
          initialValues={{
            projectPriority: '0'
          }}
        >
          <Form.Item name="id" label="项目id">
            <Input/>
          </Form.Item>
          <Form.Item name="projectType" label="项目类型">
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default Endpoint;