import React, { createContext, useState } from "react";

// Create the context
export const OrganizationContext = createContext();

// Create the provider component
export const OrganizationProvider = ({ children }) => {
  const [organizationName, setOrganizationName] = useState("Ace Hardware");

  return (
    <OrganizationContext.Provider value={{ organizationName, setOrganizationName }}>
      {children}
    </OrganizationContext.Provider>
  );
};
