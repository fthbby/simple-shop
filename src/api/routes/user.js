import { get, post, put, destroy } from "../base";
const BASE = "user";

export const getSelf = async () => {
  const res =  get(`${BASE}/self`);
  return res;
};

export const getUserById = async (id, data) => {
  const res =  get(`${BASE}/${id}`, data);
  return res;
};

export const getAll = async () => {
  const res =  get(`${BASE}/`);
  return res;
};

export const postAvatar = async()=>{
  const res = post(`${BASE}/image`)
  return res
}

export const removeAvatar = async()=>{
  const res = put(`${BASE}/image`)
  return res
}