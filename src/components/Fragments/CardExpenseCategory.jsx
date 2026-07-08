import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

const categoryIcons = {
  housing: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  entertainment: <Icon.Gamepad />,
  shopping: <Icon.Shopping />,
  others: <Icon.Other />,
};

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function CardExpenseCategory(props) {
  const { data } = props;
  const isUp = data.trend === "up";

  return (
    <Card
      title=""
      desc={
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="bg-special-bg text-gray-02 p-3 rounded-lg me-3">
                {categoryIcons[data.category] || <Icon.Other />}
              </div>
              <div>
                <div className="text-gray-02">{capitalize(data.category)}</div>
                <div className="font-bold text-xl">${data.amount}</div>
              </div>
            </div>
            <div className="text-right text-xs">
              <div className={isUp ? "text-special-red" : "text-special-green"}>
                {data.percentage}% {isUp ? <Icon.ArrowUp size={14} /> : <Icon.ArrowDown size={14} />}
              </div>
              <div className="text-gray-03">Compare to the last month</div>
            </div>
          </div>

          {data.detail?.map((d, index) => (
            <div key={index} className="flex justify-between border-t border-gray-05 py-3">
              <span>{d.item}</span>
              <div className="text-right">
                <div className="font-bold">${d.amount}</div>
                <div className="text-xs text-gray-03">{d.date}</div>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export default CardExpenseCategory;