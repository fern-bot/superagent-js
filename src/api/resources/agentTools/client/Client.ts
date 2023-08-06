/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SuperAgent from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as errors from "../../../../errors";
import * as serializers from "../../../../serialization";

export declare namespace AgentTools {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class AgentTools {
    constructor(protected readonly _options: AgentTools.Options) {}

    /**
     * List all agent tools
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async listAgentTools(request: SuperAgent.ListAgentToolsApiV1AgentToolsGetRequest = {}): Promise<unknown> {
        const { expand } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/agent-tools"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.45",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a agent tool
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async createAgentTool(request: SuperAgent.AgentTool): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/agent-tools"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.45",
            },
            contentType: "application/json",
            body: await serializers.AgentTool.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a specific agent tool
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async getAgentTool(agentToolId: string): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `api/v1/agent-tools/${agentToolId}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.45",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a specific agent tool
     * @throws {@link SuperAgent.UnprocessableEntityError}
     */
    public async deleteAgentTool(agentToolId: string): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `api/v1/agent-tools/${agentToolId}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.45",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new SuperAgent.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SuperAgentError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
