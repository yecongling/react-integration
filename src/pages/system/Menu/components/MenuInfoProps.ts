import {FormInstance} from "antd";
import {permission} from "@/services/system/permission/menuModel";

export interface MenuInfoProps {
  open: boolean;
  onCancel: () => void;
  menuData: FormInstance;
  handleOk: (permission: permission) => void;
}