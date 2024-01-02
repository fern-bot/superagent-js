/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "..";

/**
 * Represents a ApiUser record
 */
export interface PrismaModelsApiUser {
    id: string;
    token?: string;
    email?: string;
    createdAt: Date;
    updatedAt: Date;
    agents?: SuperAgent.PrismaModelsAgent[];
    llms?: SuperAgent.PrismaModelsLlm[];
    datasources?: SuperAgent.PrismaModelsDatasource[];
    tools?: SuperAgent.PrismaModelsTool[];
    workflows?: SuperAgent.PrismaModelsWorkflow[];
    vectorDb?: SuperAgent.PrismaModelsVectorDb[];
}
