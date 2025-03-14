export default {
    name: "featuredProject",
    title: "FeaturedProjects",
    type: "document",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image", 
        },
        {
            name: "featuredProjectName",
            type: "string",
            title: "ProjectName"
        },
        {
            name: "featuredProjectDescription",
            type: "text",
            title: "ProjectDescription"
        }
    ]
}