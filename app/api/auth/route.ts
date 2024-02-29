import { NextRequest, NextResponse } from "next/server";
import { urls } from "../urls";
import axios from "axios";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const requestBody = {
    username: body.username,
    password: body.password,
  };

  try {
    const result = await axios.post(urls.auth, requestBody);
    const response = NextResponse.json({
      username: result.data.username,
      name: result.data.name,
    });
    response.cookies.set("session-data", result.data.accessToken);
    return response;
  } catch (error: any) {
    return NextResponse.json(error, { status: error.response.status });
  }
}
