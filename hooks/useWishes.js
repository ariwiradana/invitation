import React, { useState } from "react";

const useWishes = () => {
  const [wishes, setWishes] = useState({
    name: "",
    message: "",
    attend: true,
  });

  const handleChange = (id, value) => {
    setWishes({ ...wishes, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ wishes });
  };

  return { wishes, handleChange, handleSubmit };
};

export default useWishes;
