export default async (request: Request, context: any) => {
  console.log("pasaaaaaaaaaaaaaaaaaEDGEFUNCTIONNNNNNNNNNN");
  request.headers.set("X-Your-Custom-Header", "Your custom header value");
};
