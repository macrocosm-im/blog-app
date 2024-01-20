import { createPresignedPost } from "@aws-sdk/s3-presigned-post"
import { S3Client } from "@aws-sdk/client-s3"
import { v4 as uuidv4 } from "uuid"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: Request) {
	return NextResponse.json({ messsage: "Hello World" })
}
