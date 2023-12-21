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

export type TPayloadForgotPassword = {
  email: string;
};

export interface IForgotPasswordService {
  execute: (data: TPayloadForgotPassword) => Promise<IReturn<any>>;
}

export interface IForgotPasswordController {
  handler: (request:Request, response: Response ) => Promise<any>;
}

export type TPayloadRecoveryPassword = {
  email: string;
  token: string;
  password: string;
};

export interface IRecoveryPasswordService {
  execute: (data: TPayloadRecoveryPassword) => Promise<IReturn<any>>;
}

export interface IRecoveryPasswordController {
  handler: (request:Request, response: Response ) => Promise<any>;
}