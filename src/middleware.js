import { cookies } from "next/headers";
import { NextResponse } from "next/server"

// const user = true;
// const cook = "abc";

export const middleware = (request) => {

    // console.log(request.cookies.get("token"));

    // const cookie = request.cookies.get("token");

    const token = cookies(request).get("next-auth.session-token");
    console.log(token);
    if (!token)
        // return NextResponse.redirect(new URL("/login", request.url));
        return NextResponse.redirect(new URL("api/auth/signin", request.url));

    // if (!cookie || cookie.value !== cook)
    // return NextResponse.redirect(new URL("/login", request.url));

    return NextResponse.next();
}

export const config = {
    matcher: ["/about", "/services", "/meals"]
}