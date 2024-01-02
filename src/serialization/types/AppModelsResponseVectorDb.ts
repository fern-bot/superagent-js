/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppModelsResponseVectorDb: core.serialization.ObjectSchema<
    serializers.AppModelsResponseVectorDb.Raw,
    SuperAgent.AppModelsResponseVectorDb
> = core.serialization.object({
    success: core.serialization.boolean(),
    data: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsVectorDb).optional(),
});

export declare namespace AppModelsResponseVectorDb {
    interface Raw {
        success: boolean;
        data?: serializers.PrismaModelsVectorDb.Raw | null;
    }
}
