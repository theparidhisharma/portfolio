export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'demoImage',
      title: 'Demo Image',
      type: 'image',
    },
    {
      name: 'githubLink',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live URL',
      type: 'url',
    }
  ],
}