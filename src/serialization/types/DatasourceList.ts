/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const DatasourceList: core.serialization.ObjectSchema<
    serializers.DatasourceList.Raw,
    SuperAgent.DatasourceList
> = core.serialization.object({
    success: core.serialization.boolean(),
    data: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsDatasource))
        .optional(),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
});

export declare namespace DatasourceList {
    interface Raw {
        success: boolean;
        data?: serializers.PrismaModelsDatasource.Raw[] | null;
        total_pages: number;
    }
}
