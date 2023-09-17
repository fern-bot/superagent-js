/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "..";

/**
 * Represents a Agent record
 */
export interface PrismaModelsAgent {
    id: string;
    name: string;
    avatar?: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    llms?: SuperAgent.PrismaModelsAgentLlm[];
    llmModel: SuperAgent.LlmModel;
    prompt?: string;
    apiUserId: string;
    apiUser?: SuperAgent.PrismaModelsApiUser;
    datasources?: SuperAgent.PrismaModelsAgentDatasource[];
    tools?: SuperAgent.PrismaModelsAgentTool[];
    workflowSteps?: SuperAgent.PrismaModelsWorkflowStep[];
}
