import { json } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";

export async function POST() {
  try {
    await auth.api.signOut({
      headers: {
        "Content-Type": "application/json",
      },
      asResponse: true
    });
    return json({ success: "Signed Out Suuccessfully" });

  } catch (error:any) {
    console.error("Sign-out error : ", error);
    return json({ error: "Sign-out failed", message: error.message }, { status: 500 });
  }
}