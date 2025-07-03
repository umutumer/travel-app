import { prismadb } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, username, password, firstName, lastName } = body;
    if (!email || !username || !password || !firstName || !lastName) {
        return NextResponse.json(
            {message: "Missing required fields"},
            {status: 400}
        )
    }

    const existingUsername = await prismadb.user.findFirst({
        where:{
            OR:[{username}]
        }
    })
    const existingEmail = await prismadb.user.findFirst({
        where:{
            OR:[{email}]
        }
    })
    if (existingEmail) {
        return NextResponse.json(
           {message: "User with provided email already exists."},
            {status: 409} 
        )
    }
    if (existingUsername) {
        return NextResponse.json(
           {message: "User with provided username already exists."},
            {status: 409} 
        )
    }
    
    const hashedPassword = await bcrypt.hash(password,12);

    const user = await prismadb.user.create({
        data:{
            email,
            photo : "",
            username,
            firstName,
            lastName,
            hashedPassword,
        }
    });
    return NextResponse.json(user|| {},{status:201})
  } catch (error) {
    return NextResponse.json(
        {message: "Someting went wrong"},
        {status: 500}
    )
  }
}
