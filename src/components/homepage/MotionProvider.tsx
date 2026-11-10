"use client";

import { MotionConfig } from "framer-motion";
import React from "react";

type MotionProviderProps = {
  children: React.ReactNode;
};

const MotionProvider = ({ children }: MotionProviderProps) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
