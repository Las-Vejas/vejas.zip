import type { APIContext } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.PRIVATE_SUPABASE_URL,
  import.meta.env.PRIVATE_SUPABASE_ANON_KEY
);

export async function POST({ request }: APIContext) {
  const formData = await request.formData();

  const name = formData.get("name");
  const message = formData.get("message");

  const { error } = await supabase
    .from("messages")
    .insert([{ name, message }]);

  if (error) {
    console.log("bro supabase is having a meltdown:", error);
    return new Response("fail", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
