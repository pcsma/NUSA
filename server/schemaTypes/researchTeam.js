export default {
  name: 'researchTeam',
  title: 'Research Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role in Project',
    },
    {
      name: 'group',
      type: 'string',
      title: 'Group Classification',
      options: {
        list: [
          {title: 'DOST-PCHRD Official', value: 'DOST-PCHRD Official'},
          {title: 'Research Team', value: 'Research Team'},
        ],
        layout: 'radio', // or "dropdown"
      },
    },

    {
      name: 'image',
      type: 'image',
      title: 'Profile Picture',
      options: {hotspot: true},
    },
    {
      name: 'description',
      type: 'text',
      title: 'Project Description',
    },
    {
      name: 'project',
      type: 'reference',
      to: [{type: 'featuredProject'}],
      title: 'Project',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
  ],
}
