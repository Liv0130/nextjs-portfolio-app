import { useEffect, useState } from "react";

export function useWindowSizeTrigger() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setKey((k) => k + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return key;
}
