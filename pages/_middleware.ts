import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default function middleware(req: NextApiRequest) {
  console.log("middlewareeeeeeeeeeeeeeeee");
}
