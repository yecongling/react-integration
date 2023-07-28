import {MockMethod} from "vite-plugin-mock"

const permission: Array<MockMethod> = [
  {
    // 接口路径
    url: '/api/sys/permission/getUserPermissionByToken',
    // 接口方法
    method: 'get',
    // 返回数据
    response: () => {
      return {
        status: 200,
        message: 'success',
        data: [
          {
            "id": "11231",
            "name": "sys-home",
            "path": "/home",
            "component": "Home",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "首页",
              "internal": false
            },
            "children": []
          },
          {
            "id": "11232",
            "name": "sys-data",
            "path": "/dataStatics",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "数据统计",
              "internal": false
            },
            "children": [
              {
                "id": "11234",
                "name": "sys-message",
                "path": "/dataStatics/messageSearch",
                "component": "dataStatics/MessageSearch",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "消息检索",
                  "internal": false
                }
              },
              {
                "id": "11235",
                "name": "sys-error",
                "path": "/dataStatics/errorStatics",
                "component": "dataStatics/ErrorStatics",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "错误统计",
                  "internal": false
                }
              },
              {
                "id": "11236",
                "name": "sys-terminal",
                "path": "/dataStatics/terminal",
                "component": "dataStatics/Terminal",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "终端监控",
                  "internal": false
                }
              },
              {
                "id": "11235",
                "name": "sys-test",
                "path": "/dataStatics/testMessage",
                "component": "dataStatics/TestMessage",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "测试消息",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "11236",
            "name": "sys-project",
            "path": "/project",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "项目设计",
              "internal": false
            },
            "children": [
              {
                "id": "11335",
                "name": "sys-project",
                "path": "/project/projectMaintain",
                "component": "project/ProjectMaintain",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "项目维护",
                  "internal": false
                }
              },
              {
                "id": "11236",
                "name": "sys-project",
                "path": "/project/terminalManager",
                "component": "project/TerminalManager",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "终端管理",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "11237",
            "name": "sys-resource",
            "path": "/resource",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "资源管理",
              "internal": false
            },
            "children": [
              {
                "id": "11238",
                "name": "sys-resource",
                "path": "/resource/database",
                "component": "resource/Database",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据库资源",
                  "internal": false
                }
              },
              {
                "id": "11239",
                "name": "sys-resource",
                "path": "/resource/dataMode",
                "component": "resource/DataMode",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据模式",
                  "internal": false
                }
              },
              {
                "id": "112323",
                "name": "sys-resource",
                "path": "/resource/transfer",
                "component": "resource/Transfer",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据转换",
                  "internal": false
                }
              },
              {
                "id": "11239",
                "name": "sys-resource",
                "path": "/resource/ssl",
                "component": "resource/SSL",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "SSL",
                  "internal": false
                }
              },
              {
                "id": "112349",
                "name": "sys-resource",
                "path": "/resource/web",
                "component": "resource/Web",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "Web服务",
                  "internal": false
                }
              },
              {
                "id": "23423",
                "name": "sys-resource",
                "path": "/resource/dll",
                "component": "resource/Dll",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "原生库",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "11239",
            "name": "sys-connection",
            "path": "/connection",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "连接管理",
              "internal": false
            },
            "children": [
              {
                "id": "11239",
                "name": "sys-connection",
                "path": "/connection/database",
                "component": "connection/Database",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据库",
                  "internal": false
                }
              },
              {
                "id": "11239",
                "name": "sys-connection",
                "path": "/connection/jms",
                "component": "connection/Jms",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "JMS",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "11239",
            "name": "sys-dataHandle",
            "path": "/dataHandle",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "数据处理",
              "internal": false
            },
            "children": [
              {
                "id": "11279",
                "name": "sys-dataHandle",
                "path": "/dataHandle/dataTransfer",
                "component": "dataHandle/DataTransfer",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据转换",
                  "internal": false
                }
              },
              {
                "id": "112795454",
                "name": "sys-dataHandle",
                "path": "/dataHandle/variable",
                "component": "dataHandle/Variable",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "变量配置",
                  "internal": false
                }
              },
              {
                "id": "1127923423",
                "name": "sys-dataHandle",
                "path": "/dataHandle/codeSet",
                "component": "dataHandle/CodeSet",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "编码集",
                  "internal": false
                }
              },
              {
                "id": "21279",
                "name": "sys-dataHandle",
                "path": "/dataHandle/script",
                "component": "dataHandle/Script",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "共享脚本",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "1122341179",
            "name": "sys-system",
            "path": "/system",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "SettingOutlined",
              "title": "系统管理",
              "internal": false
            },
            "children": [
              {
                "id": "11235233479",
                "name": "sys-system",
                "path": "/system/user",
                "component": "system/User",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "UserOutlined",
                  "title": "用户管理",
                  "internal": false
                }
              },
              {
                "id": "11222479",
                "name": "sys-system",
                "path": "/system/role",
                "component": "system/Role",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "UsergroupDeleteOutlined",
                  "title": "角色管理",
                  "internal": false
                }
              },
              {
                "id": "1134579",
                "name": "sys-system",
                "path": "/system/menu",
                "component": "system/Menu",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "MenuOutlined",
                  "title": "菜单管理",
                  "internal": false
                }
              },
              {
                "id": "11234279",
                "name": "sys-system",
                "path": "/system/permission",
                "component": "system/Permission",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "权限分配",
                  "internal": false
                }
              },
              {
                "id": "11298779",
                "name": "sys-system",
                "path": "/system/dictionary",
                "component": "system/Dictionary",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据字典",
                  "internal": false
                }
              },
              {
                "id": "112455479",
                "name": "sys-system",
                "path": "/system/dictionaryCategory",
                "component": "system/DictionaryCategory",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "字典分类",
                  "internal": false
                }
              },
              {
                "id": "118844279",
                "name": "sys-system",
                "path": "/system/announcement",
                "component": "system/Announcement",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "系统公告",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "112744339",
            "name": "sys-monitor",
            "path": "/monitor",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "系统监控",
              "internal": false
            },
            "children": [
              {
                "id": "1127555559",
                "name": "sys-monitor",
                "path": "/monitor/timer",
                "component": "monitor/Timer",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "定时器",
                  "internal": false
                }
              },
              {
                "id": "11273333339",
                "name": "sys-monitor",
                "path": "/monitor/dataLog",
                "component": "monitor/DataLog",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "数据日志",
                  "internal": false
                }
              },
              {
                "id": "11223479",
                "name": "sys-monitor",
                "path": "/monitor/log",
                "component": "monitor/Log",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "日志管理",
                  "internal": false
                }
              },
              {
                "id": "1128545579",
                "name": "sys-monitor",
                "path": "/monitor/sql",
                "component": "monitor/Sql",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "SQL监控",
                  "internal": false
                }
              },
              {
                "id": "112791231255",
                "name": "sys-monitor",
                "path": "/monitor/performance",
                "component": "monitor/Performance",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "性能监控",
                  "internal": false
                }
              },
              {
                "id": "1112279",
                "name": "sys-monitor",
                "path": "/monitor/gateway",
                "component": "monitor/Gateway",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "网关路由",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "1112354543279",
            "name": "sys-message",
            "path": "/message",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "HomeOutlined",
              "title": "消息中心",
              "internal": false
            },
            "children": [
              {
                "id": "1122345666479",
                "name": "sys-message",
                "path": "/message/messageManager",
                "component": "message/MessageManager",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "消息管理",
                  "internal": false
                }
              },
              {
                "id": "112112312379",
                "name": "sys-message",
                "path": "/message/template",
                "component": "message/Template",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "HomeOutlined",
                  "title": "消息模板",
                  "internal": false
                }
              }
            ]
          },
          {
            "id": "11273553239",
            "name": "sys-emr",
            "path": "/emr",
            "component": "",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "icon": "FileDoneOutlined",
              "title": "病历中心",
              "internal": false
            },
            "children": [
              {
                "id": "112735529",
                "name": "sys-emr",
                "path": "/emr/designCenter",
                "component": "emr/DesignCenter",
                "route": "1",
                "meta": {
                  "keepAlive": false,
                  "icon": "EditOutlined",
                  "title": "病历设计",
                  "internal": false
                }
              }
            ]
          }
        ]
      }
    }
  }
]

export default permission