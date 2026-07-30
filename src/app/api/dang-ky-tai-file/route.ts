const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: unknown; nguon?: unknown }
    | null;

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!RE_EMAIL.test(email)) {
    return Response.json({ loi: "Email không hợp lệ." }, { status: 400 });
  }

  // Chưa có dịch vụ email/CRM thật — nối vào ESP (vd Brevo, Mailchimp) tại đây khi có tài khoản.
  return Response.json({ ok: true });
}
