import { atom } from "nanostores";

export interface CardData {
  number: string;
  name: string;
  expiration: string;
  cvv: string;
}

export const $cardData = atom<CardData>({
  number: "",
  name: "",
  expiration: "",
  cvv: "",
});
