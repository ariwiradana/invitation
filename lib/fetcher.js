import client from "./axios";

export const fetcher = async (url) => {
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
