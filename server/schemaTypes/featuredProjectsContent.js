export default {
    name: "featuredProjectsContent",
    title: "Featured Projects Content",
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
            title: "Content Title",
        },
        {
            name: "content",
            title: "Content Blog",
            type: "array",
            of: [{ type: "block" }],
        }
    ]
}
