import React from "react";

/**
 * Shared motion/react mock factory.
 * Usage: vi.mock("motion/react", () => motionMock);
 */

const ANIMATION_PROPS = [
  "initial", "animate", "exit", "transition",
  "whileHover", "whileTap", "whileInView", "viewport",
  "variants", "layout", "layoutId",
];

function strip(props: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(props).filter(([k]) => !ANIMATION_PROPS.includes(k))
  );
}

// Cache components so React doesn't remount on every render
const cache: Record<string, React.ForwardRefExoticComponent<React.PropsWithChildren<Record<string, unknown>>>> = {};

function getMotionComponent(tag: string) {
  if (!cache[tag]) {
    cache[tag] = React.forwardRef<HTMLElement, React.PropsWithChildren<Record<string, unknown>>>(
      ({ children, ...p }, ref) => React.createElement(tag, { ...strip(p), ref }, children)
    );
    cache[tag].displayName = `motion.${tag}`;
  }
  return cache[tag];
}

export const motionMock = {
  motion: new Proxy({}, { get: (_: unknown, prop: string) => getMotionComponent(prop) }),
  AnimatePresence: ({ children }: React.PropsWithChildren) =>
    React.createElement(React.Fragment, null, children),
};
