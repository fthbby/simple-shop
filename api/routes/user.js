import { get, post, put, destroy } from "../base";
const BASE = "user";

export const getSelf = async () => {
  const res = await get(`${BASE}/self`);
  return res;
};

