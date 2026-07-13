import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://127.0.0.1:8000/research");

  const data = await response.json();

  return NextResponse.json(data);
}