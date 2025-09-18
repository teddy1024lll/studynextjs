"use client";

export default function GlobalsError({
  error: Error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h2>GlobalsError</h2>
      </body>
    </html>
  );
}
