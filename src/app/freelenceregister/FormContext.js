 "use client";

 import { createContext, useContext, useState } from "react";
 const FormContext = createContext();
 export const useFormContext = () => useContext(FormContext);

 export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const updateFormData = (data) => {
    setFormData(data);
 };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
