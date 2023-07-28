import React from "react";
import {Button, Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setGlobalState} from "@/store/modules/global.ts";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {collapse} = useSelector((store: any) => store.global);
  return (
    <Layout.Header
      className="ant-layout-header dis-fl jc-sb ai-ct"
      style={{
        padding: '0 16px 0 0',
        height: '48px',
        borderBottom: ' 1px solid #f0f1f2',
        backgroundColor: '#fff',
      }}>
      <Button onClick={() => dispatch(setGlobalState({collapse: !collapse}))}>切换</Button>
    </Layout.Header>
  )
}
export default Header;