import { useEffect, useRef, useState } from "react";

const useCover = () => {
  const ref = useRef(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.style.overflow = "hidden";
    setShowButton(true);
  }, []);

  const handleOpenInvitation = () => {
    const element = ref.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.height,
        behavior: "smooth",
      });
      document.body.style.overflow = "auto";
      setInterval(() => setShowButton(false), 1000);
    }
  };

  return { ref, showButton, handleOpenInvitation };
};

export default useCover;
