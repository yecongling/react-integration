import React from "react";
import {Col, Row} from "antd";

const Editor: React.FC<EditorProps> = (props) => {
  const {width, height} = props;
  return (
    <>
      <Row className="editor-container" style={{height: 'calc(100% - 132px)'}}>
        <Col span={24} style={{height: '100%'}}>
          <Row className="editor-content" style={{height: '100%'}}>
            {/* 这里添加横竖两个标尺、大纲 */}
            <Col style={{
              backgroundColor: 'rgb(227 227 227 / 82%)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              width: '100%',
              overflowY: 'auto'
            }}
                 className="editor-right-content">
              <div className="kix-page-paginated canvas-first-page" style={{
                position: 'relative',
                marginTop: '20px',
                marginBottom: '20px',
                zIndex: 0,
                width: width + 'px',
                height: height + 'px',
                boxShadow: '#9ea1a566 0 2px 12px'
              }}>
                <canvas className="kix-canvas-tile-content" width={width} height={height}
                        style={{
                          zIndex: 0,
                          backgroundColor: 'rgb(249, 251, 253)',
                          cursor: 'text'
                        }} dir="ltr"></canvas>
              </div>
              <div className="kix-page-paginated canvas-second-page" style={{
                position: 'relative',
                marginBottom: '20px',
                zIndex: 0,
                width: width + 'px',
                height: height + 'px',
                boxShadow: '#9ea1a566 0 2px 12px'
              }}>
                <canvas className="kix-canvas-tile-content" width={width} height={height}
                        style={{
                          zIndex: 0,
                          backgroundColor: 'rgb(249, 251, 253)',
                          cursor: 'text'
                        }} dir="ltr"></canvas>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

/* 设置组件默认值 */
Editor.defaultProps = {
  width: 794,
  height: 1123
}
export default Editor