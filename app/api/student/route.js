import { NextResponse } from "next/server";

export async function GET(request) {
    //Get Method Api Data Maximum Limit is 2048 charactor
    return NextResponse.json({ "msg": "Student Route" });
}