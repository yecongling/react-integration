import React from "react";
import {Modal, ModalProps} from "antd";

const Setting: React.FC<ModalProps> = (props) => {
  return (
    <>
      <Modal {...props} title="界面设置" width={650} bodyStyle={{minHeight: '400px'}}>
        这里面的设置是啥，待定
      </Modal>
    </>
  )
}
export default Setting;