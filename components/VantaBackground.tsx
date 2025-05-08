"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadEffect = async () => {
      const RINGS = (await import("vanta/dist/vanta.rings.min")).default;
      const THREE = await import("three");

      if (!vantaEffect) {
        setVantaEffect(
          RINGS({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 400.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 2.0,
          })
        );
      }
    };

    loadEffect();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1 }} />;
}