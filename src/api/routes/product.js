import { post, put, destroy, get } from "../base";
const BASE = "product";

export const getAll = async (data) => {
  const res = get(`${BASE}/`, data);
  return res;
};

export const getAllByUser = async (id, data) => {
  const res = get(`${BASE}/user/${id}`, data);
  return res;
};

export const getById = async (id, data) => {
  const res = get(`${BASE}/${id}`, data);
  return res;
};

export const create = async (data) => {
  const res = post(`${BASE}/`, data);
  return res;
};

export const update = async (data) => {
  const res = put(`${BASE}/`, data);
  return res;
};

export const remove = async (id) => {
  const res = destroy(`${BASE}/${id}`);
  return res;
};
