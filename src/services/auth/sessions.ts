import { cookies } from "next/headers";
import "server-only";

type Payload = {
  access_token: string;
};

export async function createSession(payload: Payload) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const session = { payload, expiresAt };
  const sessionValue = JSON.stringify(session);

  const cookieStore = cookies();

  cookieStore.set("syka-session", sessionValue, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
