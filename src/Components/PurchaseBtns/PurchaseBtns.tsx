import { useState } from "react";
import PurchaseBtnsStyle from "./style";

const PurchaseBtns = () => {
  const [apartment, setApartment] = useState("Rent");
  const apartmentHandler = () => {
    setApartment(apartment === "Rent" ? "Buy" : "Rent");
  };

  return (
    <PurchaseBtnsStyle>
      <div className="purchase-btns d-flex justify-content-between gap-3 w-100">
        <button
          className={`purchase-btns-rent w-50 ${
            apartment === "Rent" ? "active" : ""
          }`}
          onClick={apartmentHandler}
        >
          RENT
        </button>
        <button
          className={`purchase-btns-buy w-50 ${
            apartment === "Rent" ? "" : "active"
          }`}
          onClick={apartmentHandler}
        >
          BUY
        </button>
      </div>
    </PurchaseBtnsStyle>
  );
};

export default PurchaseBtns;
