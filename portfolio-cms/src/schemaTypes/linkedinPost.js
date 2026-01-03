export default {
  name: "linkedinPost",
  title: "LinkedIn Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "originalLink",
      title: "LinkedIn URL",
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      name: "summary",
      title: "Portfolio Summary",
      type: "text",
      rows: 4
    },
    {
      name: "themes",
      title: "Themes / Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" }
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime"
    }
  ]
};
