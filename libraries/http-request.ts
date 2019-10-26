import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL } from '../constants/api-endpoint';

// Create an Axios Client with defaults
const client = axios.create({
  baseURL: BASE_URL,
});

// Request Wrapper with default success/error actions
export const request = async (configs: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<any>) => response.data;

  const onError = (error: any) =>
    Promise.reject(error.response || error.message);

  try {
    const response = await client(configs);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export const GET = async (configs: AxiosRequestConfig) =>
  request({ method: 'GET', ...configs });

export const POST = async (configs: AxiosRequestConfig) =>
  request({ method: 'POST', ...configs });

export const PUT = async (configs: AxiosRequestConfig) =>
  request({ method: 'PUT', ...configs });

export const PATCH = async (configs: AxiosRequestConfig) =>
  request({ method: 'PATCH', ...configs });

export const DELETE = async (configs: AxiosRequestConfig) =>
  request({ method: 'DELETE', ...configs });
