import { NextRequest, NextResponse } from "next/server";
import { urls } from "../urls";
import axios, { Axios, AxiosResponse } from "axios";

interface ServerLoginResponse {
  username: string;
  name: string;
  accessToken: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const requestBody = {
    username: body.username,
    password: body.password,
  };

  try {
    const result: AxiosResponse<ServerLoginResponse> = await axios.post(urls.auth, requestBody);
    const response = NextResponse.json({
      username: result.data.username,
      name: result.data.name,
    });
    response.cookies.set("session-data", JSON.stringify(result.data));
    return response;
  } catch (error: any) {
    return NextResponse.json(error, { status: error.response.status });
  }
}
