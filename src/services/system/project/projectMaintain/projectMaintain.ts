import {Project} from "@/pages/project/ProjectMaintain/Project.ts";
import {defHttp} from "@/utils/http";
import {ProjectApi} from "@/services/system/project/projectMaintain/projectApi.ts";


export const getAllProject = (params: Project) => {
  return defHttp.post<Project[]>(
    {
      url: ProjectApi.getAllProject,
      data: params
    }
  );
}