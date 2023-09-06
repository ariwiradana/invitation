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

const WishesContent = ({ name, createdAt, message, attend }) => {
  return (
    <div className="py-4">
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
    isLoading,
    limit,
  } = useWishes();

  return (
    <Container className="px-5 py-24 bg-[url('/images/wave-pattern.png')] bg-center bg-no-repeat bg-cover">
      <Title title="Kirim Ucapan" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 mt-6 max-w-screen-md mx-auto"
      >
        <TextField
          onChange={(e) => handleChange("name", e.target.value)}
          value={wishes.name}
          variant="outlined"
          label="Nama"
          size="small"
        />
        <TextField
          onChange={(e) => handleChange("message", e.target.value)}
          value={wishes.message}
          label="Message"
          multiline
          rows={6}
          variant="outlined"
          size="small"
        />
        <div className="-mt-2">
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleChange("attend", e.target.checked)}
                checked={wishes.attend}
                sx={{
                  color: "#988567",
                  "&.Mui-checked": {
                    color: "#988567",
                  },
                }}
              />
            }
            label="Akan Hadir"
          />
        </div>
        <div>
          <Button
            disabled={wishes.name === "" || wishes.message === ""}
            icon={<FaPaperPlane />}
            type="submit"
            title="Kirim"
            extendClass="uppercase"
          />
        </div>
      </form>
      <div className="flex flex-col mt-8 divide-y divide-background border-t border-t-background max-w-screen-md mx-auto">
        {wishesData?.data?.map((wishes) => (
          <WishesContent
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
      {wishesData?.total > limit && (
        <div className="flex justify-center mt-6">
          <Button
            icon={<TbReload size={18} />}
            title="Load More"
            onClick={handleLoadMore}
          />
        </div>
      )}
    </Container>
  );
};

export default Wishes;
