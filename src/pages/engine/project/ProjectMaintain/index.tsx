import React, {useEffect, useRef, useState} from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  InputRef,
  Layout,
  MenuProps,
  message,
  Popconfirm,
  Row,
  Select,
  Space,
  Switch,
  Table,
  Tooltip
} from "antd";
import {
  BranchesOutlined,
  CompressOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  FullscreenOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SwapOutlined,
  SyncOutlined
} from "@ant-design/icons";
import {ColumnsType} from "antd/es/table";
import {Project} from "./Project.ts";
import "./index.less";
import {useNavigate} from "react-router-dom";
import {deleteProject, getAllProject} from "@/services/engine/project/projectMaintain/projectMaintain.ts";
import ProjectTypeModal from "@/pages/engine/project/ProjectMaintain/components/ProjectTypeModal.tsx";
import ProjectInfoModal from "@/pages/engine/project/ProjectMaintain/components/ProjectInfoModal.tsx";

const ProjectMaintain: React.FC = () => {
  const [searchForm] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [projectType, setProjectType] = useState(false);
  const [editInfo, setEditInfo] = useState({title: '集成', opr: '创建新的', projectType: 1});
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
        setEditInfo((prevState) => ({...prevState, title: '接口', opr: '创建新的', projectType: 1}));
        setOpen(true);
        setProjectType(false);
        projectData.resetFields();
        projectData.setFieldValue("projectType", 1);
        break;
      // 集成项目
      case "2":
        setEditInfo((prevState) => ({...prevState, title: '集成', opr: '创建新的', projectType: 0}));
        setOpen(true);
        setProjectType(false);
        projectData.resetFields();
        projectData.setFieldValue("projectType", 0);
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
    const projectType = value.projectType
    setEditInfo((prevState) => ({
      ...prevState,
      title: projectType === 1 ? "接口" : "集成",
      opr: '编辑',
      projectType: projectType
    }));
    setOpen(true);
  }

  /**
   * 删除项目
   * @param projectId 项目ID
   */
  const delProject = async (projectId: string) => {
    const result = await deleteProject(projectId);
    if (result.code === 200) {
      message.success("删除成功");
      await onSearch(searchForm.getFieldsValue());
    }
  }

  const items: MenuProps['items'] = [
    {
      key: "copy",
      label: "复制",
      icon: <CopyOutlined/>,
      onClick: () => {
        alert("复制");
      }
    },
    {
      key: "transfer",
      label: "转换",
      icon: <SwapOutlined/>,
      onClick: () => {
        alert("转换")
      }
    }
  ];

  const columns: ColumnsType<Project> = [
    {
      title: "运行状态",
      dataIndex: 'status',
      width: '40px',
      align: 'center',
      render: function (text) {
        return text === '1' ? <Switch defaultChecked/> : <Switch/>;
      }
    },
    {
      title: "警告",
      dataIndex: 'warning',
      width: '40px',
      align: 'center',
      render: function (text) {
        return <QuestionCircleOutlined style={{color: text ? 'orange' : 'gray'}}/>;
      }
    },
    {
      title: "项目名称",
      dataIndex: 'projectName',
      width: '160px',
      align: 'left',
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
      width: '40px',
      align: 'left',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.projectPriority - b.projectPriority,
    },
    {
      title: "描述",
      dataIndex: 'description',
      width: '220px',
      align: 'left',
      ellipsis: true
    },
    {
      title: "类型",
      dataIndex: 'projectType',
      width: '40px',
      align: 'center',
      render: function (text) {
        if (text === 1) {
          return <Tooltip title="集成项目"><CompressOutlined/></Tooltip>;
        }
        return <Tooltip title="接口项目"><FullscreenOutlined/></Tooltip>;
      }
    },
    {
      title: "视图",
      dataIndex: 'chart',
      width: '40px',
      align: 'center',
      render: function () {
        return <FullscreenOutlined/>;
      }
    },
    {
      title: "操作",
      dataIndex: 'opr',
      width: '120px',
      align: 'center',
      fixed: 'right',
      render: function (_text, record) {
        return <Space size={10}>
          <Tooltip placement="top" title="编辑">
            <EditOutlined style={{fontSize: '18px'}} onClick={() => editProject(record)}/>
          </Tooltip>
          <Tooltip placement="top" title="设计">
            <BranchesOutlined style={{fontSize: '18px'}} onClick={() => {
              navigate('/engine/project/projectMaintain/designer', {state: record});
            }}/>
          </Tooltip>
          <Popconfirm
            title="删除菜单"
            description="确定删除这条菜单数据吗?"
            onConfirm={() => delProject(record.id)}
            okText="确认"
            cancelText="取消"
          >
            <DeleteOutlined style={{fontSize: '18px', color: '#ff4d4f'}}/>
          </Popconfirm>
          <Dropdown menu={{items}}>
            <EllipsisOutlined style={{fontSize: '18px', cursor: 'pointer'}}/>
          </Dropdown>
        </Space>;
      }
    },
  ];

  return (
    <>
      {/* 查询区域 */}
      <Layout.Header className="layout-header-row">
        <Form form={searchForm} onFinish={onSearch} initialValues={{projectType: '-1'}}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="项目名称" name="name" style={{marginBottom: 0}}>
                <Input ref={projectName} autoFocus allowClear autoComplete="false"/>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="项目类型" name="projectType" style={{marginBottom: 0}}>
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
      </Layout.Header>
      <Layout.Content style={{marginTop: '6px'}}>
        <section className="layout-operation-bar">
          <Space>
            <Button type="primary" onClick={addProject}>新增项目</Button>
          </Space>
        </section>
        <section className="integration-layout-content">
          <Table
            rowSelection={{type: 'checkbox'}}
            style={{marginTop: '6px'}}
            size="middle"
            columns={columns}
            dataSource={projectSource}
          /></section>
      </Layout.Content>

      {/* 选择项目类型 */}
      <ProjectTypeModal projectType={projectType} setProjectType={setProjectType}
                        changeModal={changeModal} projectName={projectName}/>
      {/* 编辑弹窗 */}
      <ProjectInfoModal open={open} setOpen={setOpen} isEdit={isEdit} changeModal={changeModal}
                        projectName={projectName}
                        editInfo={editInfo} projectData={projectData} onSearch={onSearch} searchForm={searchForm}/>
    </>
  );
}
export default ProjectMaintain;