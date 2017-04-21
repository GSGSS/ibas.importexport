package org.colorcoding.ibas.importexport.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.importexport.bo.dataexporttemplate.*;

/**
* ImportExport仓库服务
*/
public interface IBORepositoryImportExportSvc extends IBORepositorySmartService {


    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-数据导出模板
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<DataExportTemplate> fetchDataExportTemplate(ICriteria criteria, String token);

    /**
     * 保存-数据导出模板
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<DataExportTemplate> saveDataExportTemplate(DataExportTemplate bo, String token);

    //--------------------------------------------------------------------------------------------//

}
