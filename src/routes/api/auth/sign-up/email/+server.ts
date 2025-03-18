import { json } from "@sveltejs/kit";
import { auth } from "$lib/server/auth.js";

export async function POST({ request }) {
  try {
    const { email, password, name, image } = await request.json();
    console.log("Signup request:", email, password, name, image);

    const response = await auth.api.signUpEmail({
      body: { email, password, name, image },
      asResponse: true,
    });

    console.log("Server response:", response);

    return json(await response.json(), { status: response.status });
  } catch (error: any) {
    console.error("Signup error:", error);
    return json({ error: "Signup failed", message: error.message }, { status: 400 });
  }
}
