import { apifetch } from "./axios";
import { IReqUser } from "../../interfaces";
import { AxiosResponse } from "axios";

type CreateUserResponse = {
  access_token: string;
};
type RegisterUserResponse = {
  statusCode: number;
  message: string;
  error?: string;
};

export const api = {
  loginAccount: async (value: IReqUser) => {
    const user = { username: value.username, password: value.password };
    const resp = await apifetch.post<CreateUserResponse>(`/api/v1/auth/login`, {
      ...user,
    });
    await localStorage.setItem("token", resp.data.access_token);
    const resptwo = await apifetch.get(`api/v1/auth/profile`);
    const data = {
      username: resptwo.data.username,
      session: true,
      userId: resptwo.data.userId,
    };

    return data;
  },
  registerAccount: async (value: IReqUser) => {
    const user = { username: value.username, password: value.password };
    try {
      const resp = await apifetch.post<RegisterUserResponse>(
        `/api/v1/auth/register`,
        {
          ...user,
        }
      );

      return resp.data;
    } catch (error) {
      return {
        statusCode: 400,
      };
    }
  },
};
