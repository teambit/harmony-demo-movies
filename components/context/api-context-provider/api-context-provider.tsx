import React, { ReactNode } from 'react';
import { RequestProvider, useResource, Resource, UseResourceResult, Request } from 'react-request-hook';
import { AxiosInstance } from 'axios';

export type ApiContextProviderProps = {
    children?: ReactNode,
    apiInstance: AxiosInstance
}

export const useApiContext = useResource;
export type useApiContextType<TRequest extends Request> = UseResourceResult<TRequest>;
export interface ContextResource<TPayload> extends Resource<TPayload>{};

export const ApiContextProvider = ({ children, apiInstance }: ApiContextProviderProps) => {
    return <RequestProvider value={apiInstance}>{children}</RequestProvider>
}