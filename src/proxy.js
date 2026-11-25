import { NextResponse } from "next/server";


export function proxy(request){
    console.log("Proxy Executed ");
    console.log("Path: " + request.nextUrl.pathname);
    return NextResponse.next();
}

export const config = {
 matcher: ["/about","/contaact","/login"]
}