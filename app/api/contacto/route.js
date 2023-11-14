import { NextResponse } from "next/server"




export const GET = async () => {
    return NextResponse.json("Hola mundo")
}

export const POST = async (request) => {
    const data = await request.json()
    console.log(data)
    // crear registro, modificar algo, BD, etc.

    return NextResponse.json("OK")
}