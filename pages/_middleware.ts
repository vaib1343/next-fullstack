import { NextRequest, NextResponse } from 'next/server';

const protectedPath = ['/'];

const authPath = ['/login', '/signup'];

export default function middleware(req: NextRequest) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    const url = req.nextUrl.clone();
    if (protectedPath.find((p) => p === req.nextUrl.pathname)) {
        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
    if(authPath.find((p) => p=== req.nextUrl.pathname)){
        if(token ){
            url.pathname = '/';
            return NextResponse.redirect(url)
        }
    }
}
