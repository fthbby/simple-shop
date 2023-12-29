import axios from "axios";

const url = (text) => {
  return `${process.env.REACT_APP_BACKEND_URL}/${text}`;
};

export const get = async (path) => {
  try {
    const res = await axios.get(url(path), {});
  } catch (err) {
    console.log("err:", err);
  }
};

export const destroy = async (path) => {
  try {
    const res = await axios.delete(url(path), {});
  } catch (err) {
    console.log("err:", err);
  }
};

export const post = async (path, data = {}) => {
  try {
    const res = await axios.post(url(path), data, {});
  } catch (err) {
    console.log("err:", err);
  }
};

export const put = async (path, data) => {
  try {
    const res = await axios.put(url(path), data, {});
  } catch (err) {
    console.log("err:", err);
  }
};
