import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({ key: 'userAtom' });


const getInitialCartState = () => {
  const storedState = localStorage.getItem("userAtom");
  return storedState ? JSON.parse(storedState) : [];
};


export const userAtom = atom({
  key: "userAtom",
  default: getInitialCartState(),
  effects_UNSTABLE: [persistAtom],

});
