import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


const getInitialCartState = () => {
  const storedState = localStorage.getItem("cartAtomState");
  return storedState ? JSON.parse(storedState) : [];
};


export const cartAtom = atom({
  key: "cartAtomState",
  default: getInitialCartState(),
  effects_UNSTABLE: [persistAtom],

});
