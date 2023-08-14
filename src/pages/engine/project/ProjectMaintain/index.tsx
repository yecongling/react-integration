import React, {useEffect, useRef, useState} from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Input,
  InputRef,
  MenuProps,
  Popconfirm,
  Row,
  Select,
  Space,
  Switch,
  Table
} from "antd";
import {
  DownOutlined,
  FullscreenOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SyncOutlined
} from "@ant-design/icons";
import {ColumnsType} from "antd/es/table";
import {Project} from "./Project.ts";
import "./index.less";
import {useNavigate} from "react-router-dom";
import {getAllProject} from "@/services/engine/project/projectMaintain/projectMaintain.ts";
import ProjectTypeModal from "@/pages/engine/project/ProjectMaintain/components/ProjectTypeModal.tsx";
import ProjectInfoModal from "@/pages/engine/project/ProjectMaintain/components/ProjectInfoModal.tsx";

const ProjectMaintain: React.FC = () => {
  const [searchForm] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [projectType, setProjectType] = useState(false);
  const [editInfo, setEditInfo] = useState({title: '集成', opr: '创建新的', projectType: '1'});
  const [isEdit, setIsEdit] = useState(false);
  const [projectSource, setProjectSource] = useState<Project[]>([]);
  const [projectData] = Form.useForm();
  const projectName = useRef<InputRef>(null);
  const navigate = useNavigate();

  useEffect(() => {
    onSearch(searchForm.getFieldsValue());
  }, [])

  /**
   * 检索
   *
   */
  const onSearch = async (value: any) => {
    const resource = await getAllProject(value);
    setProjectSource(resource);
  }

  /**
   * 新增项目
   */
  const addProject = () => {
    setProjectType(true);
  }

  /**
   * 改变窗口
   * @param type
   */
  const changeModal = (type: string) => {
    switch (type) {
      // 接口项目
      case "1":
        setEditInfo((prevState) => ({...prevState, title: '接口', opr: '创建新的', projectType: '1'}));
        setOpen(true);
        setProjectType(false);
        projectData.resetFields();
        break;
      // 集成项目
      case "2":
        setEditInfo((prevState) => ({...prevState, title: '集成', opr: '创建新的', projectType: '2'}));
        setOpen(true);
        setProjectType(false);
        projectData.resetFields();
        break;
      case "3":
        setOpen(false);
        setProjectType(true);
        break
      default:
        break;
    }
    setIsEdit(false);
  }

  /**
   * 编辑项目
   */
  const editProject = (value: Project) => {
    projectData.setFieldsValue(value);
    setIsEdit(true);
    setEditInfo((prevState) => ({...prevState, title: '接口', opr: '编辑'}));
    setOpen(true);
  }

  const items: MenuProps['items'] = [
    {
      key: "copy",
      label: "复制",
      onClick: () => {
        alert("复制");
      }
    },
    {
      key: "transfer",
      label: "转换",
      onClick: () => {
        alert("转换")
      }
    }
  ];

  const columns: ColumnsType<Project> = [
    {
      title: "运行状态",
      dataIndex: 'status',
      width: '5%',
      align: 'center',
      render: function (text) {
        return text === '1' ? <Switch defaultChecked/> : <Switch/>;
      }
    },
    {
      title: "警告",
      dataIndex: 'warning',
      width: '5%',
      align: 'center',
      render: function (text) {
        return <QuestionCircleOutlined style={{color: text ? 'orange' : 'gray'}}/>;
      }
    },
    {
      title: "项目名称",
      dataIndex: 'projectName',
      width: '15%',
      align: 'left',
      sorter: true,
      ellipsis: true,
      render: function (text, record) {
        return (
          <>
            <a type="link" onClick={() => {
              navigate('/engine/project/projectMaintain/designer', {state: record});
            }}>{text}</a>
          </>
        )
      }
    },
    {
      title: "优先级",
      dataIndex: 'projectPriority',
      width: '4%',
      align: 'left',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.projectPriority - b.projectPriority,
    },
    {
      title: "描述",
      dataIndex: 'description',
      width: '16%',
      align: 'left',
      ellipsis: true
    },
    {
      title: "类型",
      dataIndex: 'type',
      width: '5%',
      align: 'center',
      render: function () {
        return <FullscreenOutlined/>;
      }
    },
    {
      title: "视图",
      dataIndex: 'chart',
      width: '5%',
      align: 'center',
      render: function () {
        return <FullscreenOutlined/>;
      }
    },
    {
      title: "操作",
      dataIndex: 'opr',
      width: '10%',
      align: 'center',
      render: function (_text, record) {
        return <Space size={8}>
          <Button type="primary" size="small" onClick={() => editProject(record)}>编辑</Button>
          <Button type="primary" size="small" onClick={() => {
            navigate('/engine/project/projectMaintain/designer', {state: record});
          }}>设计</Button>
          <Popconfirm
            title="删除菜单"
            description="确定删除这条菜单数据吗?"
            onConfirm={() => alert("删除")}
            okText="确认"
            cancelText="取消"
          >
            <Button type="primary" danger size="small">删除</Button>
          </Popconfirm>
          <Dropdown menu={{items}}>
            <Button type="default" size="small">更多<DownOutlined/></Button>
          </Dropdown>
        </Space>;
      }
    },
  ];

  return (
    <>
      {/* 查询区域 */}
      <Card>
        <Form form={searchForm} onFinish={onSearch} initialValues={{type: '-1'}}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="项目名称" name="name" style={{marginBottom: 0}}>
                <Input ref={projectName} autoFocus allowClear autoComplete="false"/>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="项目类型" name="type" style={{marginBottom: 0}}>
                <Select options={[
                  {value: '-1', label: '全部'},
                  {value: '0', label: '集成项目'},
                  {value: '1', label: '接口项目'}
                ]}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button type="primary" htmlType="submit"><SearchOutlined/>查询</Button>
              <Button htmlType="reset" style={{margin: '0 8px'}}><SyncOutlined/>重置</Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card style={{marginTop: '6px'}}>
        <Space>
          <Button type="primary" onClick={addProject}>新增项目</Button>
        </Space>
        <Table
          style={{marginTop: '6px'}}
          bordered
          size="middle"
          columns={columns}
          dataSource={projectSource}
        />
      </Card>

      {/* 选择项目类型 */}
      <ProjectTypeModal projectType={projectType} setProjectType={setProjectType}
                        changeModal={changeModal} projectName={projectName}/>
      {/* 编辑弹窗 */}
      <ProjectInfoModal open={open} setOpen={setOpen} isEdit={isEdit} changeModal={changeModal}
                        projectName={projectName}
                        editInfo={editInfo} projectData={projectData}/>
    </>
  );
}
export default ProjectMaintain;