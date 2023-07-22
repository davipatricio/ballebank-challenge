import { $cardData, CardData } from "../stores/cardData";
import { useStore } from "@nanostores/react";
import formatCardNumber from "../utils/formatCardNumber";

export default function UserInfoCard() {
  const cardData = useStore($cardData);

  const handleChange =
    (field: keyof CardData) => (e: React.ChangeEvent<HTMLInputElement>) =>
      $cardData.set({
        ...cardData,
        [field]: e.target.value
      });

  return (
    <div className="flex flex-col gap-10 p-8 font-semibold text-gray-400">
      <label>
        <p>Número do Cartão</p>
        <input
          type="text"
          className="w-full h-10 p-3 rounded-md mt-3 font-mono"
          placeholder="0000 0000 0000 0000"
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
          value={formatCardNumber(cardData.number)}
          onChange={handleChange("number")}
          minLength={19}
          maxLength={19}
          required
        />
      </label>

      <label>
        <p>Nome do Titular</p>
        <input
          type="text"
          className="w-full h-10 p-3 rounded-md mt-3 font-medium"
          placeholder="Leonardo di Ser Piero da Vinci"
          value={cardData.name}
          onChange={handleChange("name")}
          required
        />
      </label>

      <div className="grid grid-cols-2 gap-10">
        <label>
          <p>Validade</p>
          <input
            className="w-full h-10 p-3 rounded-md mt-3 font-mono"
            placeholder="MM/AA"
            type="text"
            pattern="[0-9]{2}/[0-9]{2}"
            value={cardData.expiration}
            onChange={handleChange("expiration")}
            required
          />
        </label>

        <label>
          <p>CVV</p>
          <input
            className="w-full h-10 p-3 rounded-md mt-3 font-mono"
            placeholder="123"
            type="text"
            minLength={3}
            maxLength={4}
            pattern="[0-9]{3,4}"
            value={cardData.cvv}
            onChange={handleChange("cvv")}
            data-item="cvv"
            required
          />
        </label>
      </div>
    </div>
  );
}
