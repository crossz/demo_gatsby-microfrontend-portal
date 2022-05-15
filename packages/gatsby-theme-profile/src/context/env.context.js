import React from "react";

const domain = process.env.GATSBY_AUTH0_DOMAIN;
const clientId = process.env.GATSBY_AUTH0_CLIENT_ID;
const audience = process.env.GATSBY_AUTH0_AUDIENCE;
const apiServerUrl = process.env.GATSBY_API_SERVER_URL;
const redirectUri = process.env.GATSBY_API_CALLBACK_URL;

const isEnvValid = domain && clientId && audience && apiServerUrl;

if (!isEnvValid) {
  throw new Error("Missing environment variables.");
}

const dotenv = {
  domain: domain,
  clientId: clientId,
  audience: audience,
  apiServerUrl: apiServerUrl,
  redirectUri: redirectUri
};

export const EnvContext = React.createContext(dotenv);

export const useEnv = () => {
  const context = React.useContext(EnvContext);
  if (!context) {
    throw new Error(`useEnv must be used within a EnvProvider`);
  }
  return context;
};

export const EnvProvider = (props) => {
  return <EnvContext.Provider value={dotenv} {...props} />;
};
