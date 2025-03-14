import { json } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";

export async function GET() {
  try {
    await auth.api.;
    return json({ success: "Hii lenin domar" });

  } catch (error) {
    console.error("Sign-out error:", error);
    return json({ error: "Sign-out failed", message: error.message }, { status: 500 });
  }
}