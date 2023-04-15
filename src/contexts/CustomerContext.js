import { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

export const useCustomers = () => {
  return useContext(CustomerContext);
};

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};
