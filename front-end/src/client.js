import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: "production",
    apiVersion: "2025-02-06",
    token: "skTo5F1QsXgQWT9L6LJC7lED3DASbIKoZv2nNfa77dU4wcjKdl4N1vpWcR0hwfFzFyMFpN9ustfcXUSqJI0UzYKNf9qnDbGFohNf3SPy4Z6W1SmACxZs07PjUK1n5hc7Ru7bYGgSGjYWVQGTtLSWSx6zulZDHLvct5dxzFfkHX9zxibG1soK",
    useCdn: false,
    ignoreBrowserTokenWarning:true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}