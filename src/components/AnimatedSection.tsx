"use client";

import React from "react";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Animation = "slide-up" | "slide-left" | "slide-right" | "fade";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;           // ms
  animation?: Animation;
  threshold?: number;       // 0–1
  style?: CSSProperties;
  as?: React.ElementType;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "slide-up",
  threshold = 0.12,
  style,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const animClass =
    animation === "slide-up"
      ? "animate-on-scroll"
      : animation === "slide-left"
      ? "animate-left"
      : animation === "slide-right"
      ? "animate-right"
      : "animate-fade";

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${visible ? "in-view" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
