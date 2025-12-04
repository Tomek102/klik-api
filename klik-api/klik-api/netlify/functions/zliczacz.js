import { getStore } from "@netlify/blobs";

export const handler = async () => {
    const store = getStore("clicks");

    let count = parseInt(await store.get("count")) || 0;
    count++;

    await store.set("count", count.toString());

    return {
        statusCode: 200,
        body: JSON.stringify({ count })
    };
};