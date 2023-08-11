import React from "react";
import {Tabs, TabsProps} from "antd";
import {StepBackwardOutlined} from "@ant-design/icons";
import "./index.less";
const IconPicker: React.FC = () => {

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `普通图标`,
      children: <>
        <ul className="anticons-list">
          <li className="Outlined">
            <StepBackwardOutlined style={{fontSize: "18px"}}/>
          </li>
        </ul>
      </>,
    },
    {
      key: '2',
      label: `网站通用图标`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `指示性图标`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <>
      <Tabs tabBarStyle={{marginBottom: 0}} defaultActiveKey="1" items={items} onChange={onChange}/>
    </>
  )
}
export default IconPicker;