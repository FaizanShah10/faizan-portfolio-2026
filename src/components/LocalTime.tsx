"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/content";

export function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: personal.timezone,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 text-sm text-ink-muted">
      <span className="inline-block h-2 w-2 rounded-[2px] bg-status" aria-hidden="true" />
      {time ? `${time} ${personal.timezoneAbbr}` : `––:–– ${personal.timezoneAbbr}`}
    </span>
  );
}
