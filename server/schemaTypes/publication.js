export default {
    name: "publication",
    title: "publication",
    type: "document",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image"
        },
        {
            name: "publicationName",
            type: "string",
            title: "PublicationName"
        },
        {
            name: "publicationDescription",
            type: "text",
            title: "PublicationDescription"
        },
        {
            name: "order",
            title: "Display Order",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "citation",
            type: "text",
            title: "Citation"
        },
        {
            name: "abstract",
            type: "text",
            title: "Abstract"
        },
        {
            name: "linkToFull",
            type: "url",
            title: "Link to Full Publication"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: { source: 'publicationName' }
        }
          
    ]
}