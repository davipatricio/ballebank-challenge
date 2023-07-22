import { useStore } from "@nanostores/react";
import { $cardData } from "../../stores/cardData";
import formatCardNumber from "../../utils/formatCardNumber";

export default function FrontCreditCard() {
  const cardData = useStore($cardData);

  return (
    <div className="p-8 h-full w-full">
      <div className="flex flex-col justify-between bg-gradient-to-br from-salmon to-[#D47A66] rounded-lg p-6 h-full">
        <img
          src="ballebank-logo.png"
          alt="Ballebank logo"
          className="ml-auto"
          draggable="false"
        />

        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl font-bold">
            {cardData.number || "0000 0000 0000 0000"}
          </h2>
          <p className="text-base font-medium">
            {cardData.name || "Leonardo di Ser Piero da Vinci"}
          </p>

          <span>
            <p className="text-sm font-normal">Valido até</p>
            <span className="text-xs font-bold mt-1">
              {cardData.expiration || "MM/AA"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
