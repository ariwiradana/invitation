import React from "react";
import Title from "@/components/elements/title/app";
import Container from "@/components/container/app";
import { BiCalendar, BiTime, BiUserCheck, BiUserX } from "react-icons/bi";
import { TbReload } from "react-icons/tb";
import Button from "@/components/elements/button/app";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";
import useWishes from "@/hooks/useWishes";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const WishesContent = ({ name, createdAt, message, attend, index }) => {
  // Create a Moment.js object from the input date
  const dateObject = moment("2023-09-17");

  // Extract day, hour, minutes, and seconds
  const day = dateObject.format("dddd"); // Full day name (e.g., Monday)
  const hour = dateObject.format("HH"); // 24-hour format (e.g., 14)
  const minutes = dateObject.format("mm"); // Minutes (e.g., 30)
  const seconds = dateObject.format("ss"); // Seconds (e.g., 45)

  console.log({ day, hour, minutes, seconds });
  return (
    <div
      className="py-4"
      data-aos-duration="1000"
      data-aos="zoom-in-up"
      data-aos-delay={`${200 * index + 1}`}
    >
      <h5 className="font-public-sans text-primary text-lg">{name}</h5>
      <div className="flex divide-x">
        <div className="flex gap-x-1 pr-3">
          <BiCalendar className="text-dark mt-[3px]" size={15} />
          <p className="text-base font-playfair-display italic">{createdAt}</p>
        </div>
        <div className="flex gap-x-1 pl-3">
          {attend ? (
            <BiUserCheck className="text-dark mt-[3px]" size={18} />
          ) : (
            <BiUserX className="text-dark mt-[3px]" size={18} />
          )}
          <p className="text-base font-playfair-display italic">
            {attend ? "Akan hadir" : "Berhalangan hadir"}
          </p>
        </div>
      </div>
      <p className="text-sm mt-2 font-public-sans text-dark leading-6">
        {message}
      </p>
    </div>
  );
};

const Wishes = () => {
  const {
    handleChange,
    handleSubmit,
    handleLoadMore,
    wishes,
    wishesData,
    loading,
    limit,
    loadingLoadMore,
  } = useWishes();

  return (
    <Container className="px-5 py-20 bg-[url('/images/wave-pattern.png')] bg-center bg-no-repeat bg-cover">
      <Title dataAosDuration="1000" dataAos="zoom-in-up" title="Kirim Ucapan" />
      <form
        data-aos-duration="1000"
        data-aos="zoom-in-up"
        data-aos-delay="200"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 mt-6 max-w-screen-md mx-auto bg-primary bg-[url('/images/texture.png')] bg-no-repeat bg-cover bg-center] px-5 pt-10 pb-5 rounded-xl"
      >
        <TextField
          onChange={(e) => handleChange("name", e.target.value)}
          value={wishes.name}
          variant="outlined"
          label="Nama"
          size="small"
          sx={{
            "& .MuiInputBase-root": {
              color: "white",
              fontSize: 16,
            },
          }}
        />
        <TextField
          sx={{
            "& .MuiInputBase-root": {
              color: "white",
              fontSize: 16,
            },
          }}
          onChange={(e) => handleChange("message", e.target.value)}
          value={wishes.message}
          label="Ucapan"
          multiline
          rows={6}
          variant="outlined"
          size="small"
        />
        <div className="-mt-2 flex items-center">
          <Checkbox
            onChange={(e) => handleChange("attend", e.target.checked)}
            checked={wishes.attend}
            sx={{
              color: "#ffff",
              "&.Mui-checked": {
                color: "#ffff",
              },
            }}
          />
          <h5 className="text-white font-semibold text-sm">Akan Hadir</h5>
        </div>
        <div>
          <Button
            loading={loading}
            disabled={wishes.name === "" || wishes.message === ""}
            icon={<FaPaperPlane />}
            type="submit"
            title="Kirim"
            extendClass="uppercase"
          />
        </div>
      </form>
      <div className="flex flex-col mt-8 divide-y divide-background border-t border-t-background max-w-screen-md mx-auto">
        {wishesData?.data?.map((wishes, index) => (
          <WishesContent
            index={index}
            key={wishes?._id}
            attend={wishes?.attend}
            name={wishes?.name}
            createdAt={moment
              .unix(wishes?.created_at)
              .format("dddd, D MMMM YYYY")}
            message={wishes?.message}
          />
        ))}
      </div>
      {wishesData?.total > wishesData?.data?.length && (
        <div className="flex justify-center mt-6">
          <Button
            icon={
              <TbReload
                className={loadingLoadMore ? "animate-spin" : "animate-none"}
                size={18}
              />
            }
            title="Load More"
            onClick={handleLoadMore}
          />
        </div>
      )}
    </Container>
  );
};

export default Wishes;
