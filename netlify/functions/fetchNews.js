import fetch from "node-fetch";

export async function handler(event, context) {
  const category = event.queryStringParameters?.category || "general";
  const page = event.queryStringParameters?.page || 1;
  const pageSize = event.queryStringParameters?.pageSize || 6;

  const apiKey = process.env.NEWS_API_KEY; // Make sure you set this in Netlify environment variables

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Failed to fetch news: ${response.statusText}` }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
