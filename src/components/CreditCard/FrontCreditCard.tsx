import BallebankLogo from '../../assets/ballebank-logo.png';

import { useStore } from "@nanostores/react";
import { $cardData } from "../../stores/cardData";

export default function FrontCreditCard() {
  const cardData = useStore($cardData);

  return (
    <div className="h-full w-full sm:p-8">
      <div className="flex flex-col justify-between bg-gradient-to-br from-salmon to-[#D47A66] rounded-lg p-6 h-full sm:p-6">
        <img
          src={BallebankLogo}
          alt="Ballebank logo"
          className="ml-auto"
          draggable="false"
        />

        <div className="flex flex-col gap-0.5 mt-1 sm:gap-2.5">
          <h2 className="sm:text-2xl font-bold">
            {cardData.number || "0000 0000 0000 0000"}
          </h2>
          <p className="text-base font-medium break-words">
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
