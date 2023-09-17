/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "..";

/**
 * Represents a Datasource record
 */
export interface PrismaModelsDatasource {
    id: string;
    name: string;
    description?: string;
    url?: string;
    type: SuperAgent.DatasourceType;
    apiUserId: string;
    apiUser?: SuperAgent.PrismaModelsApiUser;
    createdAt: Date;
    updatedAt: Date;
    metadata?: string;
    status: SuperAgent.DatasourceStatus;
    datasources?: SuperAgent.PrismaModelsAgentDatasource[];
}
