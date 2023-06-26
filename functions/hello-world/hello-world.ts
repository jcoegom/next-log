import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  console.log("received data", event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world!`,
    }),
  };
};
