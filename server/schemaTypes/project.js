export default {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image", 
        },
        {
            name: "projectName",
            type: "string",
            title: "ProjectName"
        },
        {
            name: "projectDescription",
            type: "text",
            title: "ProjectDescription"
        }
    ]
}