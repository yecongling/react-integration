import React from "react";
import {Col, Row} from "antd";
const Footer: React.FC = () => {
  return (
    <Row className="editor-footer" style={{height: '40px'}}>
      <Col span={24} style={{height: '40px'}}>页数、字数、模式、放大缩小、全屏</Col>
    </Row>
  )
}
export default Footer;