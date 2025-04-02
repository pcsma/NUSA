export default {
    name: "featuredProject",
    title: "Featured Projects",
    type: "document",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image",
            options: { hotspot: true },
        },
        {
            name: "alt",
            type: "string",
            title: "Image Alt Text",
        },
        {
            name: "title",
            type: "string",
            title: "Project Name",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
        },
        {
            name: "description",
            type: "text",
            title: "Project Description",
        },
        {
            name: "featured",
            title: "Feature this project?",
            type: "boolean",
            initialValue: false
        },  
        {
            name: "content",
            title: "Related Content",
            type: "array",
            of: [{ type: "reference", to: [{ type: "featuredProjectsContent" }] }],
        }
    ]
}
