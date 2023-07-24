import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  console.log("MYFUNCION_LOGGGG");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `MY FUNCTIONS!`,
    }),
  };
};
