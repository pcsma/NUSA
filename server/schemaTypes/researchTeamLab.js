export default {
    name: 'researchTeamLab',
    title: 'Research Team Lab',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'colSpan',
        title: 'Column Span (1–4)',
        type: 'number',
      },
      {
        name: 'rowSpan',
        title: 'Row Span (1–7)',
        type: 'number',
      },
      {
        name: 'colStart',
        title: 'Column Start (Optional)',
        type: 'number',
      },
      {
        name: 'rowStart',
        title: 'Row Start (Optional)',
        type: 'number',
      },
      {
        name: 'displayOrder',
        title: 'Display Order',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'overviewTitle',
        title: 'Overview Title',
        type: 'string',
      },
      {
        name: 'overviewText',
        title: 'Overview Text',
        type: 'text',
      }
    ],
  }
  