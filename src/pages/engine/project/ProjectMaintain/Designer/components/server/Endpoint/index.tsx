import React, {useRef} from "react";
import {Form, Input, InputRef, Modal, ModalProps, Select} from "antd";

/**
 * 服务模块
 * @constructor
 */
const Endpoint: React.FC<ModalProps> = (props) => {
  const projectName = useRef<InputRef>(null);
  /**
   * 窗口打开关闭
   * @param open
   */
  const handleAfterOpen = (open: boolean) => {
    if (open && projectName.current) {
      projectName.current.focus();
    }
  }
  return (
    <>
      <Modal {...props} width={800} title="编辑服务" afterOpenChange={handleAfterOpen}>
        <Form
          layout="horizontal"
          name="basic"
          size="middle"
          labelCol={{span: 4}}
          initialValues={{
            projectPriority: '0',
            projectType: 'soap'
          }}
        >
          <Form.Item name="id" label="项目id">
            <Input/>
          </Form.Item>
          <Form.Item name="projectName" label="项目名称">
            <Input ref={projectName}/>
          </Form.Item>
          <Form.Item name="projectType" label="项目类型">
            <Select options={[
              {value: 'soap', label: 'web服务'},
              {value: 'http', label: 'http服务'}
            ]}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default Endpoint;