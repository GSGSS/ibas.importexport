/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryImportExport } from "../api/index";
import { DataConverterOnline, DataConverterOffline } from "./DataConverters";

/** 数据导入&导出 业务仓库 */
export class BORepositoryImportExport extends ibas.BORepositoryApplication implements IBORepositoryImportExport {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        if (this.offline) {
            // 离线状态
            return new DataConverterOffline();
        } else {
            return new DataConverterOnline();

        }
    }
    /** 获取导入方法地址 */
    getImportUrl(): string {
        let url: string = this.address;
        if (!url.endsWith("/")) {
            url = url + "/";
        }
        if (url.endsWith("/data/")) {
            url = url.substring(0, url.lastIndexOf("/data/") + 1);
        }
        let token: string = this.token;
        if (ibas.objects.isNull(token)) {
            token = "";
        }
        return ibas.strings.format("{0}file/import?token={1}", url, token);
    }
    /** 获取导入方法地址 */
    parseImportResult(data: any): ibas.IOperationResult<string> {
        let jData: Object = data;
        if (typeof data === "string") {
            jData = JSON.parse(data);
        }
        return this.createConverter().parsing(jData, "import");
    }
    /**
     * 查询 数据导出模板
     * @param fetcher 查询者
     */
    fetchDataExportTemplate(fetcher: ibas.FetchCaller<bo.DataExportTemplate>): void {
        super.fetch(bo.DataExportTemplate.name, fetcher);
    }
    /**
     * 保存 数据导出模板
     * @param saver 保存者
     */
    saveDataExportTemplate(saver: ibas.SaveCaller<bo.DataExportTemplate>): void {
        super.save(bo.DataExportTemplate.name, saver);
    }

}