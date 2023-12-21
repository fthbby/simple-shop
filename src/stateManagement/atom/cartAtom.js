import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const cartAtom = atom({
  key: "cartAtomState",
  default: JSON.parse(localStorage.getItem("cartAtomState")) || [],
  effects_UNSTABLE: [persistAtom],

});
