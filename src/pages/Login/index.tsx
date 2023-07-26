import React, {useRef, useState} from "react";
import {Button, Checkbox, Col, Form, Input, Row} from "antd";
import logo from "@/assets/images/logo.png";
import {LockOutlined, SecurityScanOutlined, UserOutlined} from "@ant-design/icons";
import "./login.less";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  // 加载状态
  // const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState(Math.floor(Math.random() * 10000).toString());
  const submit = async () => {
    navigate("/");
  }

  /**
   * 获取验证码
   */
  const getCode = () => {
    setCode(Math.floor(Math.random() * 10000).toString());
  }

  return (
    <>
      <div className="dragArea"/>
      <div className="login-container">
        <div className="login-box">
          {/* 左边图案和标题 */}
          <div className="login-left">
            <div className="logo" style={{marginTop: "60px"}}>
              <img className="login-icon" width="70" src={logo} alt="logo"/>
            </div>
            <div className="title">
              <p style={{fontSize: "20px", margin: 0}}><span style={{
                fontFamily: "微软雅黑 Bold, 微软雅黑 Regular, 微软雅黑, sans-serif",
                fontWeight: 700
              }}>集成信息管理平台</span></p>
              <p style={{fontSize: "14px", margin: 0}}><span
                style={{
                  fontFamily: "微软雅黑, sans-serif",
                  fontWeight: 400,
                  color: "#999999"
                }}>Integration System</span>
              </p>
            </div>
          </div>
          {/* 右边登陆表单 */}
          <div className="login-form">
            <div className="login-title">
              <p style={{fontSize: "28px", textAlign: "center", margin: 0}}><span style={{
                fontFamily: "微软雅黑 Bold, 微软雅黑 Regular, 微软雅黑, sans-serif",
                fontWeight: 700
              }}>用户登录</span></p>
            </div>
            <div className="form" style={{marginTop: "40px"}}>
              <Form
                form={form}
                name="login"
                labelCol={{span: 5}}
                initialValues={{captcha: '', remember: true}}
                size="large"
                autoComplete="off"
                onFinish={submit}
              >
                <Form.Item name="username" rules={[{required: true, message: "请输入用户名"}]}>
                  <Input size="large" ref={inputRef} autoFocus allowClear placeholder="用户名：admin"
                         prefix={<UserOutlined/>}/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: "请输入密码"}]}>
                  <Input.Password size="large" allowClear autoComplete="new-password" placeholder="密码：123123"
                                  prefix={<LockOutlined/>}/>
                </Form.Item>
                <Form.Item>
                  <Row gutter={8}>
                    <Col span={18}>
                      <Form.Item
                        name="captcha"
                        noStyle
                        rules={[{required: true, message: '请输入验证码'}]}
                      >
                        <Input size="large" allowClear placeholder="输入右侧验证码" prefix={<SecurityScanOutlined/>}/>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Button size="large" onClick={getCode}
                              style={{width: "100%", backgroundColor: "#f0f0f0"}}>{code}</Button>
                    </Col>
                  </Row>
                </Form.Item>
                {/* 记住密码 */}
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button loading={false} size="large" style={{width: "100%"}} type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}
export default Login;