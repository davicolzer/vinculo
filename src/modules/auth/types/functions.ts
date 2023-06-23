import { Request, Response } from "express";

type IReturn<T> = {
  data?: T;
  error?: {
    statusCode?: number;
    message?: any;
  };
};

export type TPayloadLogin = {
  email: string;
  password: string;
};

export interface ILoginService {
  execute: (data: TPayloadLogin) => Promise<IReturn<any>>;
}

export interface ILoginController {
  handler: (request: Request, response: Response ) => Promise<any>;
}

export type TPayloadRecoverLogin = {
  email: string;
};

export interface IRecoverPasswordService {
  execute: (data: TPayloadRecoverLogin) => Promise<IReturn<any>>;
}

export interface IRecoverPasswordController {
  handler: (request:Request, response: Response ) => Promise<any>;
}