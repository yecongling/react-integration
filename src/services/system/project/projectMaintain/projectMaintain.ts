import {Project} from "@/pages/project/ProjectMaintain/Project.ts";
import {defHttp} from "@/utils/http";
import {ProjectApi} from "@/services/system/project/projectMaintain/projectApi.ts";
import {Result} from "@/types/global";


export const getAllProject = (params: Project) => {
  return defHttp.post<Project[]>(
    {
      url: ProjectApi.getAllProject,
      data: params
    }
  );
}

export const addProject = (params: Project) => {
  return defHttp.post<Result<any>>(
    {
      url: ProjectApi.addProject,
      data: params
    },
    {
      isTransformResponse: false
    }
  )
}

/**
 * 更新项目
 *
 * @param params
 */
export const updateProject = (params: Project) => {
  return defHttp.post<Result<any>>(
    {
      url: ProjectApi.updateProject,
      data: params
    },
    {
      isTransformResponse: false
    }
  )
}