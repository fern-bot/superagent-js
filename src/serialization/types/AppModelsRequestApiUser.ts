/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppModelsRequestApiUser: core.serialization.ObjectSchema<
    serializers.AppModelsRequestApiUser.Raw,
    SuperAgent.AppModelsRequestApiUser
> = core.serialization.object({
    email: core.serialization.string(),
    firstName: core.serialization.string().optional(),
    lastName: core.serialization.string().optional(),
    company: core.serialization.string().optional(),
});

export declare namespace AppModelsRequestApiUser {
    interface Raw {
        email: string;
        firstName?: string | null;
        lastName?: string | null;
        company?: string | null;
    }
}
