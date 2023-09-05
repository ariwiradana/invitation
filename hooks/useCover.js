import { useEffect, useRef } from "react";

const useCover = () => {
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
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
    }
  };

  return { ref, handleOpenInvitation };
};

export default useCover;
