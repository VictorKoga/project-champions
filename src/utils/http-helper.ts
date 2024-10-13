import { HttpResponse } from "../models/http-response-model";

export const ok = async (data:any): Promise<HttpResponse> =>{
  return {
    statusCode: 200,
    body: data
  };
}

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: 
      { message: "Successful!" }
  }
}

export const noContent = async (data:any): Promise<HttpResponse> =>{
  return {
    statusCode: 204,
    body: null
  };
}

export const badRequest = async (error?: Error): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: error ?? null
  }
}