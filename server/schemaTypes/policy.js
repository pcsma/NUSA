export default {
    name: "policy",
    title: "Website Policy",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Policy Title"
      },
      {
        name: "content",
        type: "text",
        title: "Policy Content"
      },
      {
        name: "order",
        type: "number",
        title: "Display Order",
        validation: (Rule) => Rule.required().min(0)
      }
    ]
  }
  