import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export default function middleware(req: any) {
  console.log("middlewareeeeeeeeeeeeeeeee", req.nextUrl.pathname);
}
