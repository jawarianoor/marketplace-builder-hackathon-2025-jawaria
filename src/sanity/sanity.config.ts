import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema/index";

export const SanityConfig = defineConfig({
    name: 'default',
    title: 'Studio',
    projectId: 'ptvmmkkv',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    basePath: '/studio',
    schema: {
        types: schemaTypes
    }
})