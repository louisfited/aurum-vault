"use client";

import { useEffect } from "react";
import AOS from "aos";
import type { AosOptions } from "aos";
import "aos/dist/aos.css";

const aosConfig: AosOptions = {
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120,
};

export default function AosProvider(): null {
  useEffect(() => {
    AOS.init(aosConfig);
  }, []);

  return null;
}
