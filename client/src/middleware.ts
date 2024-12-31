import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired(async function middleware(req) {
  console.log("teta");
  const user = await getSession();

  if (user && req.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/task", req.url));
});

export const config = {
  matcher: ["/home"],
};
