import { post, put, destroy, get } from "../base";
const BASE = "product";

export const getAll = async (data) => {
  const res = await get(`${BASE}/`, data);
  return res;
};

export const getById = async (id, data) => {
  const res = get(`${BASE}/${id}`);
  return res;
};

export const create = async (data) => {
  const res = post(`${BASE}/`, data);
  return res;
};

export const update = async (id, data) => {
  const res = put(`${BASE}/${id}`, data);
  return res;
};

export const remove = async (id) => {
  const res = destroy(`${BASE}/${id}`);
  return res;
};
