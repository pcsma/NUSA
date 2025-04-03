export default {
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short summary of the article',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Cover Image',
      options: {hotspot: true},
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
        input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 96),
    },
    },
    {
      name: 'project',
      type: 'reference',
      to: [{type: 'featuredProject'}],
      title: 'Project',
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", type: "image", title: "Image" },
            { name: "caption", type: "string", title: "Caption" }
          ]
        }
      ]
    }
    
  ],
}
