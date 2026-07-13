import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://https://ai-research-assistant-4vr0.onrender.com/research");

  const data = await response.json();

  return NextResponse.json(data);
}