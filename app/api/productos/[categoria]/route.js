import { mockData } from "@/data/products"
import { NextResponse } from "next/server"

const sleep = async (timer) => new Promise((resolve) => setTimeout(resolve, timer))

export const GET = async (_, { params }) => {
    const { categoria } = params
    
    const items = categoria === 'all'
                    ? mockData
                    : mockData.filter(product => product.type === categoria)

    await sleep(1000)

    return NextResponse.json(items)
}