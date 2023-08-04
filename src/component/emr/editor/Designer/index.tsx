import React from "react";
import {Card, Col} from "antd";
import Toolbar from "@/component/emr/editor/Toolbar";
import Editor from "@/component/emr/editor/Editor";
import Footer from "@/component/emr/editor/Footer";

/**
 * 病历设计器
 * @constructor
 */
const Designer: React.FC<DesignerProps> = (props) => {
  const {span} = props;
  return (
    <>
      <Col span={span} className="editor-container" style={{height: '100%'}}>
        <Card style={{height: '100%'}} bodyStyle={{padding: '0', height: '100%'}}>
          {/* 分三部分  上面的文本的操作，中间（左边的文件操作和插件，和编辑区） 下面的foot */}
          <Toolbar/>
          {/* 中间 */}
          <Editor/>
          <Footer/>
        </Card>
      </Col>
    </>
  )
}

Designer.defaultProps = {
  span: 17
}
export default Designer;