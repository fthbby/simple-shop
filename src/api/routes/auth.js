import { post } from "../base";
const BASE = "auth";

export const login = async (data) => {
  const res = post(`${BASE}/login`, data);
  return res;
};

export const register = async (data) => {
  const res = post(`${BASE}/register`, data);
  return res;
};
