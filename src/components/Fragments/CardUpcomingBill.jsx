import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

const getBillIcon = (name) => {
  const lowerName = name?.toLowerCase() || "";

  if (lowerName.includes("figma")) return <Icon.Figma size={50} />;
  if (lowerName.includes("adobe")) return <Icon.Adobe size={50} />;

  return <Icon.Bill size={50} />;
};

function CardUpcomingBill(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          data.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-primary gap-3">
              <CircularProgress color="inherit" size={50} />
              <span>Loading Data...</span>
            </div>
          ) : (
            <div className="flex flex-col justify-around h-full">
              {data.map((item) => (
                <div key={item.id} className="flex justify-between pt-3 pb-3">
                  <div className="flex">
                    <div className="bg-special-bg p-4 rounded-lg flex flex-col">
                      <span className="text-xs">{item.month}</span>
                      <span className="text-2xl font-bold">{item.date}</span>
                    </div>

                    <div className="ms-10">
                      <div className="mb-1">{getBillIcon(item.name)}</div>
                      <span className="font-bold">{item.name}</span>
                      <br />
                      <span className="text-xs">
                        Last Charge - {item.lastCharge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
                      ${item.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;