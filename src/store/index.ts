import {configureStore} from "@reduxjs/toolkit";
import * as reducer from "./modules";
// configureStore 创建一个redux数据
const store = configureStore({
  // 合并多个slice
  reducer: {
    ...reducer
  }
});
export default store;