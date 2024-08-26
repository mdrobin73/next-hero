import { NextResponse } from "next/server"

// const user = true;
const cook = "abc";

export const middleware = (request) => {

    console.log(request.cookies.get("token"));

    const cookie = request.cookies.get("token");

    if (!cookie || cookie.value !== cook)
    return NextResponse.redirect(new URL("/login", request.url));

    return NextResponse.next();
}

export const config = {
    matcher: ["/about", "/services"]
}