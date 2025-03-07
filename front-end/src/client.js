import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    // projectId: "uy9vilxm",
    dataset: "production",
    apiVersion: "2025-02-06",
    token: import.meta.env.VITE_PROJECT_TOKEN,
    // token: "skEQpAFmnRbGqRCu3hEGU8Rc0cWj6XhPjLX66TYOGmPSgbPAJyl1yITvQmZwyCp9CEVMrnnldq2ptQDUEmS41TEqjruINwvp5l3skkyubrTIYFVL0sH27yKqWqktH34m33uPXfr3HB2Ka3POedv57AA3HfNPd9XDZyYmgyLY4g5WOMsGcdX4",
    useCdn: false,
    ignoreBrowserTokenWarning:true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}