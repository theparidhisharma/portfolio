import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// 1. Import your action
import { GenerateSummaryAction } from './actions/generateSummaryAction' 

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  
  // 2. Add the document configuration here
  document: {
    actions: (prev, context) => {
      // Only show the button for LinkedIn posts
      return context.schemaType === 'linkedinPost'
        ? [...prev, GenerateSummaryAction]
        : prev
    },
  },
})