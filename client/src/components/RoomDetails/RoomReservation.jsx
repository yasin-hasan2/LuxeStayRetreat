import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { differenceInCalendarDays } from "date-fns";

const RoomReservation = ({ room }) => {
  console.log("start date --> ", new Date(room.from).toLocaleDateString());
  console.log("End date --> ", new Date(room.to).toLocaleDateString());
  const [state, setState] = useState([
    {
      startDate: new Date(room.from),
      endDate: new Date(room.to),
      key: "selection",
    },
  ]);

  // total days * price
  const dayCount = parseInt(
    differenceInCalendarDays(new Date(room.to), new Date(room.from))
  );
  const totalPrice = dayCount * room?.price;

  console.log(dayCount, totalPrice);

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">/night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <DateRange
          showDateDisplay={false}
          rangeColors={["#F6657E"]}
          // editableDateInputs={true}
          onChange={(item) => {
            console.log(item);
            setState([
              {
                startDate: new Date(room.from),
                endDate: new Date(room.to),
                key: "selection",
              },
            ]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.object,
};

export default RoomReservation;
