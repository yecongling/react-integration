import React from "react";
import type {TreeProps} from 'antd/es/tree';
import {Tree} from "antd";

const ITree: React.FC<TreeProps> = (props) => {
  return (
    <Tree.DirectoryTree {...props} treeData={props.treeData} style={{marginTop: '6px'}}></Tree.DirectoryTree>
  )
}
ITree.defaultProps = {
  showLine: true,
  defaultExpandParent: true,
  treeData: []
}

export default ITree;