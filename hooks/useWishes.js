import client from "@/lib/axios";
import { fetcher } from "@/lib/fetcher";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const useWishes = () => {
  const [wishes, setWishes] = useState({
    name: "",
    message: "",
    attend: true,
  });
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);
  const [wishesData, setWishesData] = useState(null);
  const { data, isLoading, mutate } = useSWR(
    `/api/wishes?limit=${limit}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setWishesData(data);
      setLoadingLoadMore(false);
    }
  }, [data]);

  const handleChange = (id, value) => {
    setWishes({ ...wishes, [id]: value });
  };

  const handleLoadMore = () => {
    setLoadingLoadMore(true);
    const currentLimit = limit;
    setLimit(currentLimit + 2);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let payload = { ...wishes };
    payload["created_at"] = moment().unix();

    try {
      const response = await client.post("/api/wishes", payload);
      mutate();
      setWishes({
        name: "",
        message: "",
        attend: true,
      });
      setLoading(false);
    } catch (error) {}
  };

  return {
    wishes,
    wishesData,
    loading,
    limit,
    loadingLoadMore,
    handleChange,
    handleSubmit,
    handleLoadMore,
  };
};

export default useWishes;
