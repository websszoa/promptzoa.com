"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "en";
    router.replace(`/${saved}`);
  }, [router]);

  return null;
}
