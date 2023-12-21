import { atom } from "recoil";

export const cartAtom = atom({
  key: "cartAtomState",
  default: JSON.parse(localStorage.getItem("cartAtomState")) || [],
});
