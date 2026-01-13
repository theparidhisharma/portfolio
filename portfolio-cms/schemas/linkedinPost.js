export default {
  name: 'linkedinPost',
  title: 'LinkedIn Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'snippet',
      title: 'Snippet',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Post URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Date String',
      type: 'string',
    }
  ],
}