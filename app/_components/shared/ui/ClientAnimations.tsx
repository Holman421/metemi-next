"use client";

import { useEffect } from "react";
import { initAnimations } from "../../../_utils/animations";

export default function ClientAnimations() {
  useEffect(() => {
    initAnimations();
  }, []);

  return null;
}
