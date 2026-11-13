"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be blocked; mailto still works via the CTA.
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="link pressable group inline-flex items-center gap-2.5 text-left text-base font-semibold text-ink hover:text-status"
      aria-label={`Copy email ${email}`}
    >
      {email}
      {copied ? (
        <Check className="icon-pop h-4 w-4 text-status" />
      ) : (
        <Copy className="h-4 w-4 text-ink-faint transition-colors group-hover:text-ink" />
      )}
    </button>
  );
}
