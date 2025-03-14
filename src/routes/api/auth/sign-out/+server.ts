import { json } from "@sveltejs/kit";
import { auth } from "$lib/server/auth";

export async function POST() {
  try {
    await auth.api.signOut();
    return json({ success: true });
  } catch (error) {
    console.error("Sign-out error:", error);
    return json({ error: "Sign-out failed", message: error.message }, { status: 500 });
  }
}