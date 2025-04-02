export default {
    name: 'faq',
    title: 'FAQs',
    type: 'document',
    fields: [
      {
        name: 'question',
        type: 'string',
        title: 'Question',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'answer',
        type: 'text',
        title: 'Answer',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'order',
        type: 'number',
        title: 'Display Order',
      },
    ],
  };
  