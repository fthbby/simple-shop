import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({ key: 'user' });


const getInitialCartState = () => {
  const storedState = localStorage.getItem("user");
  return storedState ? JSON.parse(storedState) : [];
};


export const userAtom = atom({
  key: "user",
  default: getInitialCartState(),
  effects_UNSTABLE: [persistAtom],

});
