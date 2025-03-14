import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

export async function GET() {
  try {
    // Example: Deleting old records
    // const { data, error } = await supabase
    //   .from("your_table")
    //   .delete()
    //   .lt("created_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    // if (error) throw error;

    const data = "Hello World";

    return NextResponse.json({ message: "Cron job executed", data });
  } catch (error) {
    return NextResponse.json({ error: 'Some error occurred' }, { status: 500 });
  }
}
