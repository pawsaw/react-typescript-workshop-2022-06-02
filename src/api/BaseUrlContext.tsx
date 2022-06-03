import React, { ReactNode, useContext } from 'react';

export const defaultBaseUrl = 'http://localhost:4730';

const BaseUrlContext = React.createContext(defaultBaseUrl);

export interface BaseUrlProviderProps {
  url?: string;
  children: ReactNode;
}

export const BaseUrlProvider: React.FC<BaseUrlProviderProps> = ({
  url = defaultBaseUrl,
  children,
}) => {
  return <BaseUrlContext.Provider value={url}>{children}</BaseUrlContext.Provider>;
};

export const useBaseUrl = () => useContext(BaseUrlContext);
