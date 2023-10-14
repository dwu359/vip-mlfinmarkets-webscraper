import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (_evt) => {
  const data = await fetch("https://www.google.com");
  const text = await data.text();
  return {
    statusCode: 200,
    body: `data: ${text}`,
  };
});
