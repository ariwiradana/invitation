import client from "@/lib/axios";
import { fetcher } from "@/lib/fetcher";
import moment from "moment/moment";
import React, { useState } from "react";
import useSWR from "swr";

const useWishes = () => {
  const [wishes, setWishes] = useState({
    name: "",
    message: "",
    attend: true,
  });
  const [limit, setLimit] = useState(4);
  const {
    data: wishesData,
    isLoading,
    mutate,
  } = useSWR(`/api/wishes?limit=${limit}`, fetcher);

  const handleChange = (id, value) => {
    setWishes({ ...wishes, [id]: value });
  };

  const handleLoadMore = () => {
    const currentLimit = limit;
    setLimit(currentLimit + 2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { ...wishes };
    payload["created_at"] = moment().unix();

    try {
      const response = await client.post("/api/wishes", payload);
      mutate();
    } catch (error) {}
  };

  return {
    wishes,
    wishesData,
    isLoading,
    limit,
    handleChange,
    handleSubmit,
    handleLoadMore,
  };
};

export default useWishes;
