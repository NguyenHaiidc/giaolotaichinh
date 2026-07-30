interface JsonLdProps {
  data: object;
}

/** Nhúng dữ liệu JSON-LD an toàn (escape "<" để tránh thoát khỏi thẻ script). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
