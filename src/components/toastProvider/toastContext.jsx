import React, { createContext, useContext } from 'react';
import { toast } from 'sonner';

// Create ToastContext
const ToastContext = createContext();

// Create a provider component
export const ToastProvider = ({ children }) => {
  const showToast = (message) => {
    toast(message); // Trigger toast
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>  
  );
};

// Custom hook to use toast
export const useToast = () => useContext(ToastContext);
