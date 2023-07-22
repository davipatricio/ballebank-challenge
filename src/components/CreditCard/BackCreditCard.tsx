import { useStore } from "@nanostores/react";
import { $cardData } from "../../stores/cardData";

export default function BackCreditCard() {
  const cardData = useStore($cardData);

  return (
    <div className="p-8 h-full w-full">
      <div className="flex flex-col bg-gradient-to-br from-salmon to-[#D47A66] rounded-lg p-6 h-full">
        <span className="block bg-[#A45A49] w-full h-10 rounded-md" />

        <div className="mt-3 ml-auto text-right">
          <p>CVV</p>
          <span className="font-bold">{cardData.cvv || "123"}</span>
        </div>

        <div className="mt-auto ml-auto mb-6">
          <img src="discord-logo.png" draggable="false" alt="Discord logo" />
        </div>
      </div>
    </div>
  );
}
