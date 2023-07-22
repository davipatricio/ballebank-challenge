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
    <div className="flex flex-col gap-5 font-semibold text-gray-400 sm:gap-10 sm:p-8">
      <label>
        <p>Número do Cartão</p>
        <input
          type="text"
          className="w-full h-10 p-3 rounded-md mt-3 font-mono bg-gray-red"
          placeholder="0000 0000 0000 0000"
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
          value={formatCardNumber(cardData.number)}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            e.target.value = formatCardNumber(value);
            handleChange("number")(e);
          }}
          minLength={19}
          maxLength={19}
          required
        />
      </label>

      <label>
        <p>Nome do Titular</p>
        <input
          type="text"
          className="w-full h-10 p-3 rounded-md mt-3 font-medium bg-gray-red"
          placeholder="Leonardo di Ser Piero da Vinci"
          value={cardData.name}
          minLength={5}
          maxLength={60}
          onChange={handleChange("name")}
          required
        />
      </label>

      <div className="grid grid-cols-2 gap-3 sm:gap-10">
        <label>
          <p>Validade</p>
          <input
            className="w-full h-10 p-3 rounded-md mt-3 font-mono bg-gray-red"
            placeholder="MM/AA"
            type="text"
            pattern="[0-9]{2}/[0-9]{2}"
            minLength={5}
            maxLength={5}
            value={cardData.expiration}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              e.target.value = value
                .replace(/(\d{2})(\d)/, "$1/$2")
                .replace(/(\/\d{2})\d+?$/, "$1");

              handleChange("expiration")(e);
            }}
            required
          />
        </label>

        <label>
          <p>CVV</p>
          <input
            className="w-full h-10 p-3 rounded-md mt-3 font-mono bg-gray-red"
            placeholder="123"
            type="text"
            minLength={3}
            maxLength={4}
            pattern="[0-9]{3,4}"
            value={cardData.cvv}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
              handleChange("cvv")(e);
            }}
            data-item="cvv"
            required
          />
        </label>
      </div>
    </div>
  );
}
