/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsDatasource: core.serialization.ObjectSchema<
    serializers.PrismaModelsDatasource.Raw,
    SuperAgent.PrismaModelsDatasource
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("..")).DatasourceType),
    apiUserId: core.serialization.string(),
    apiUser: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsApiUser).optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    metadata: core.serialization.string().optional(),
    status: core.serialization.lazy(async () => (await import("..")).DatasourceStatus),
    datasources: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgentDatasource))
        .optional(),
});

export declare namespace PrismaModelsDatasource {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        url?: string | null;
        type: serializers.DatasourceType.Raw;
        apiUserId: string;
        apiUser?: serializers.PrismaModelsApiUser.Raw | null;
        createdAt: string;
        updatedAt: string;
        metadata?: string | null;
        status: serializers.DatasourceStatus.Raw;
        datasources?: serializers.PrismaModelsAgentDatasource.Raw[] | null;
    }
}
