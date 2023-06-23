import { User } from '@prisma/client';
import { Request, Response } from "express";

export type TPayloadCreateUser = {
  name: string;
  email: `${string}@${string}.${string}`;
  password: string;
};

type IReturn<T> = {
  data?: T;
  error?: {
    statusCode?: number;
    message?: any;
  };
};

type TUser = Omit<User, 'password'>;

export interface ICreateUserService {
  execute: (data: TPayloadCreateUser) => Promise<IReturn<TUser>>;
}

export interface ICreateUserController {
  handler: (request:Request, response: Response ) => Promise<any>;
}
