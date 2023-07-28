import {createSlice} from "@reduxjs/toolkit";

export interface globalState {
  theme: string;
  colorPrimary: string;
  collapse: boolean;
}

const initialState: globalState = {
  theme: "light",
  colorPrimary: "#ccc",
  collapse: false
}

// 创建一个Slice
export const global = createSlice({
  // 命名空间
  name: "global",

  // 初始状态值
  initialState,

  // 定义reducer并生成关联的操作
  reducers: {
    setGlobalState(state, {payload}) {
      console.log(payload);
      state.collapse = payload.collapse
    }
  }
});

// 到处reducer方法
export const {setGlobalState} = global.actions;

// 默认到处
export default global.reducer