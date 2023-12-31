// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { Handler } from "@netlify/functions";

const handler: Handler = async (event: any) => {
  const idPage = new Date().getTime().toString();
  console.log("idPage: ", idPage);
  try {
    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({
        name: "Jose " + idPage,
        subname: "Serverless function",
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: (error as any).toString() };
  }
};

module.exports = { handler };
