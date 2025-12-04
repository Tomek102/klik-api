import { getStore } from "@netlify/blobs";

export const handler = async () => {
    const store = getStore("clicks");

    await store.set("count", "0");

    return {
        statusCode: 200,
        body: JSON.stringify({ count: 0 })
    };
};
