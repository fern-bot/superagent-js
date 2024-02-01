/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AgentType: core.serialization.Schema<serializers.AgentType.Raw, SuperAgent.AgentType> =
    core.serialization.enum_(["SUPERAGENT", "OPENAI_ASSISTANT"]);

export declare namespace AgentType {
    type Raw = "SUPERAGENT" | "OPENAI_ASSISTANT";
}
