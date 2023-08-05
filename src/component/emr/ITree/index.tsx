import React, {useState} from "react";
import type {TreeProps} from 'antd/es/tree';
import {Tree} from "antd";

const ITree: React.FC<TreeProps> = (props) => {
  const {defaultSelectedKeys} = props;
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKeys);
  return (
    <>
      <Tree {...props} treeData={props.treeData} selectedKeys={selectedKey} style={{marginTop: '6px'}}
            onDoubleClick={(_a, b) => {
              setSelectedKey([b.key]);
              alert("选中的节点是：" + b.title)
            }}></Tree>
    </>
  )
}
ITree.defaultProps = {
  showLine: true,
  defaultExpandParent: true,
  treeData: [],
  showIcon: true
}

export default ITree;