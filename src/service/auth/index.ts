import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

type PropsLogin = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  fullname: string;
};

type LoginResponse = {
  success: boolean;
  message: string;
  responseObject?: {
    token: string;
    user: User;
  };
  statusCode?: number;
};

type PropsRegister = {
  email: string;
  password: string;
  name: string;
  role: string;
};

type RegisterResponse = {
  success: boolean;
  message: string;
  responseObject?: {
    token: string;
    user: User;
  };
  statusCode?: number;
};

export const registerUser = async ({
  email,
  password,
  name,
  role,
}: PropsRegister): Promise<RegisterResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      name,
      role,
    });
    return response.data;
  } catch (error) {
    let message = "Terjadi kesalahan saat registrasi";
    if (axios.isAxiosError(error)) {
      message =
        error.response?.data?.message ||
        (error.request ? "Tidak dapat menghubungi server" : error.message);
    } else {
      message = (error as Error).message;
    }

    return {
      success: false,
      message,
    };
  }
};

export const loginUser = async ({
  email,
  password,
}: PropsLogin): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    let message = "Terjadi kesalahan saat Melakukan Login";
    if (axios.isAxiosError(error)) {
      message =
        error.response?.data?.message ||
        (error.request ? "Tidak dapat menghubungi server" : error.message);
    } else {
      message = (error as Error).message;
    }

    return {
      success: false,
      message,
    };
  }
};
