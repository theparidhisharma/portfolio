import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";
import { GenerateSummaryAction } from "./actions/generateSummaryAction";

export default defineConfig({
  name: "default",
  title: "Portfolio CMS",

  projectId: "YOUR_PROJECT_ID",
  dataset: "production",

  plugins: [
    deskTool({
      document: {
        actions: (prev, context) =>
          context.schemaType === "linkedinPost"
            ? [...prev, GenerateSummaryAction]
            : prev
      }
    })
  ],

  schema: {
    types: schemaTypes
  }
});
