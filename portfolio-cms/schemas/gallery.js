export default {
  name: 'gallery',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'longDesc',
      title: 'Long Description',
      type: 'text',
    }
  ],
}