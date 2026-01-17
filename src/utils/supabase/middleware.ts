import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const updateSession = async (request: NextRequest) => {
  // Create an unmodified response

  const url = new URL(request.url);
  const path = request.nextUrl.pathname;
  if (path.startsWith("/auth")) {
    return NextResponse.next();
  }

  if (
    path === "/" ||
    path.startsWith("/api") ||
    path.startsWith("/_next") ||
    path.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|map|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }
  console.log("new Url", url);

  // Skip auth check for API routes and static files to avoid conflicts
  const isApiRoute = request.nextUrl.pathname.startsWith("/api");
  const isStaticFile = request.nextUrl.pathname.match(
    /\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/
  );
  // authcheck for landing page
  const isLandingPage = request.nextUrl.pathname == "/";

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  console.log("requested url", request.url);
  console.log("now");

  if (isLandingPage || isApiRoute || isStaticFile) {
    return supabaseResponse;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
};
