/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const AppModelsRequestAgentDatasource: core.serialization.Schema<
    serializers.AppModelsRequestAgentDatasource.Raw,
    SuperAgent.AppModelsRequestAgentDatasource
> = core.serialization.object({
    datasourceId: core.serialization.string(),
});

export declare namespace AppModelsRequestAgentDatasource {
    interface Raw {
        datasourceId: string;
    }
}
