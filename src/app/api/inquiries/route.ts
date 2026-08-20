import { db } from "@/db";
import { inquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

const clean = (v: unknown, max = 600) =>
  typeof v === "string" ? v.trim().slice(0, max) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 120);
    const interest = clean(body.interest, 80);
    const message = clean(body.message);

    if (!name) {
      return Response.json({ ok: false, error: "Name is required" }, { status: 400 });
    }

    const [row] = await db
      .insert(inquiries)
      .values({ name, phone, email, interest, message })
      .returning({ id: inquiries.id });

    return Response.json({ ok: true, id: row.id }, { status: 201 });
  } catch (err) {
    console.error("inquiry insert failed:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
