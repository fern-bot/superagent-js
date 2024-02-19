/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const AppModelsRequestAgent: core.serialization.Schema<
    serializers.AppModelsRequestAgent.Raw,
    SuperAgent.AppModelsRequestAgent
> = core.serialization.object({
    isActive: core.serialization.boolean().optional(),
    name: core.serialization.string(),
    initialMessage: core.serialization.string().optional(),
    prompt: core.serialization.string().optional(),
    llmModel: core.serialization.string().optional(),
    llmProvider: core.serialization.lazy(async () => (await import("../../../..")).LlmProvider).optional(),
    description: core.serialization.string().optional(),
    avatar: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("../../../..")).AgentType).optional(),
    parameters: core.serialization
        .lazyObject(async () => (await import("../../../..")).OpenAiAssistantParameters)
        .optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace AppModelsRequestAgent {
    interface Raw {
        isActive?: boolean | null;
        name: string;
        initialMessage?: string | null;
        prompt?: string | null;
        llmModel?: string | null;
        llmProvider?: serializers.LlmProvider.Raw | null;
        description?: string | null;
        avatar?: string | null;
        type?: serializers.AgentType.Raw | null;
        parameters?: serializers.OpenAiAssistantParameters.Raw | null;
        metadata?: Record<string, unknown> | null;
    }
}
