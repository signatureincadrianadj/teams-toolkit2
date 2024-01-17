// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/****************************************************************************************
 *                            NOTICE: AUTO-GENERATED                                    *
 ****************************************************************************************
 * This file is automatically generated by script "./src/question/generator.ts".        *
 * Please don't manually change its contents, as any modifications will be overwritten! *
 ***************************************************************************************/

import { Inputs } from "@microsoft/teamsfx-api";

export interface CreateProjectInputs extends Inputs {
  /** @description Teams Toolkit: select runtime for your app */
  runtime?: "node" | "dotnet";
  /** @description New Project */
  "project-type"?: "bot-type" | "tab-type" | "me-type" | "outlook-addin-type";
  /** @description Capabilities */
  capabilities?:
    | "bot"
    | "ai-bot"
    | "ai-assistant-bot"
    | "notification"
    | "command-bot"
    | "workflow-bot"
    | "tab-non-sso"
    | "sso-launch-page"
    | "dashboard-tab"
    | "tab-spfx"
    | "search-app"
    | "collect-form-message-extension"
    | "search-message-extension"
    | "link-unfurling"
    | "copilot-plugin-new-api"
    | "copilot-plugin-existing-api"
    | "copilot-plugin-openai-plugin";
  /** @description Choose triggers */
  "bot-host-type-trigger"?:
    | "http-restify"
    | "http-webapi"
    | "http-and-timer-functions"
    | "http-functions"
    | "timer-functions";
  /** @description SharePoint Solution */
  "spfx-solution"?: "new" | "import";
  /** @description SharePoint Framework */
  "spfx-install-latest-package"?: boolean;
  /** @description Framework */
  "spfx-framework-type"?: "react" | "minimal" | "none";
  /** @description Name for SharePoint Framework Web Part */
  "spfx-webpart-name"?: string;
  /** @description SPFx solution folder */
  "spfx-folder"?: string;
  /** @description Architecture of Search Based Message Extension */
  "me-architecture"?: "new-api" | "api-spec" | "bot-plugin" | "bot";
  /** @description OpenAPI Description Document */
  "openapi-spec-location"?: string;
  /** @description OpenAI Plugin Manifest */
  "openai-plugin-manifest"?: string;
  /** @description Select Operation(s) Teams Can Interact with */
  "api-operation"?: string[];
  /** @description Authentication Type */
  "api-me-auth"?: "none" | "api-key";
  /** @description Programming Language */
  "programming-language"?: "javascript" | "typescript" | "csharp";
  /** @description Application name */
  "app-name"?: string;
}
