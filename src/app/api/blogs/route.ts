import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    message: "Hello from blog api server",
  });
};
