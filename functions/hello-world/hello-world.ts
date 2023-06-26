import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  console.log("pasaaaaaaaaaaaa");
  console.error("erorrrrrrrrrrrrrrrrrr");
  console.log(event);
  console.log(context);
  console.log("enddddddddddddd");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world!`,
    }),
  };
};
