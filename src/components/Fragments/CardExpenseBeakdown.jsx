import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

const categoryIcons = {
  housing: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  entertainment: <Icon.Gamepad />,
  shopping: <Icon.Shopping />,
  others: <Icon.Other />,
};

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function CardExpenseBreakdown(props) {
  const { data } = props;

  return (
    <Card
      title="Expenses Breakdown"
      desc={
        data.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-primary">
            <CircularProgress color="inherit" size={50} />
            Loading Data
          </div>
        ) : (
          <div className="h-full md:grid md:grid-cols-3 gap-4">
            {data.map((item, index) => {
              const isUp = item.trend === "up";
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex">
                    <div>
                      <div className="bg-special-bg text-gray-02 px-3 py-5 rounded-lg flex flex-col place-content-center">
                        {categoryIcons[item.category] || <Icon.Other />}
                      </div>
                    </div>
                    <div className="ms-4">
                      <span className="text-gray-02">{capitalize(item.category)}</span>
                      <br />
                      <span className="font-bold text-lg">${item.amount}</span>
                      <div className="flex">
                        <span className="text-gray-02">{item.percentage}%*</span>{" "}
                        <div className={isUp ? "text-special-red" : "text-special-green"}>
                          {isUp ? <Icon.ArrowUp size={16} /> : <Icon.ArrowDown size={16} />}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex place-content-center flex-col me-8">
                    <Icon.ArrowRight />
                  </div>
                </div>
              );
            })}
          </div>
        )
      }
    />
  );
}

export default CardExpenseBreakdown;