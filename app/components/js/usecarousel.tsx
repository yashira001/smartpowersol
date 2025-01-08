import { useEffect, useState } from "react";

export default function useCarousel({
  parentId,
  handlerId,
  indicatorId,
}: {
  parentId: string;
  handlerId?: string;
  indicatorId?: string;
}) {
  const [currIndex, setCurrIndex] = useState(0);

  const forward = (len: number) => {
    setCurrIndex((index) => (index + 1) % len);
  };
  const backward = (len: number) => {
    setCurrIndex((index) => (index + len - 1) % len);
  };
  useEffect(() => {
    const parent = document.getElementById(parentId) as HTMLDivElement;

    const pChildren = parent.children;
    if (handlerId) {
      const handler = document.getElementById(handlerId) as HTMLDivElement;
      const sChildren = handler.children;
      for (let i = 0; i < sChildren.length; i++) {
        const child = sChildren.item(i) as HTMLSpanElement;
        const length = pChildren.length;
        child.addEventListener("click", () => {
          if (i == 0) backward(length);
          else forward(length);
        });
      }
    }
    if (indicatorId) {
      const handler = document.getElementById(indicatorId) as HTMLDivElement;
      const sChildren = handler.children;
      for (let i = 0; i < sChildren.length; i++) {
        const child = sChildren.item(i) as HTMLSpanElement;

        child.addEventListener("click", () => {
          setCurrIndex(i);
        });
      }
    }
  }, [parentId, handlerId, indicatorId]);
  useEffect(() => {
    const parent = document.getElementById(parentId) as HTMLDivElement;

    const pChildren = parent.children;
    if (indicatorId) {
      const handler = document.getElementById(indicatorId) as HTMLDivElement;
      const sChildren = handler.children;

      for (let i = 0; i < pChildren.length; i++) {
        const child = sChildren.item(i) as HTMLSpanElement;
        child.style.backgroundColor =
          currIndex == i ? "var(--p)" : "transparent";
      }
    }

    for (let i = 0; i < pChildren.length; i++) {
      const child = pChildren.item(i) as HTMLDivElement;

      child.style.transition = "1.5s";
      child.style.position = "absolute";
      child.style.opacity = currIndex == i ? "1" : "0";
    }
    const inv = setInterval(() => {
      forward(pChildren.length);
    }, 10000);

    return () => {
      clearInterval(inv);
    };
  }, [currIndex, indicatorId, parentId]);
}
