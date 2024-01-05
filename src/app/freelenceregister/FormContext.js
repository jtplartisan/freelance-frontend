
"use client";

import { createContext, useState } from "react";
export const FormContext = createContext();


export const FormFillProvider = ({ children }) => {
 const [formData, setFormData] = useState(null);

 return (
   <FormContext.Provider value={{ formData, setFormData}}>
     {children}
   </FormContext.Provider>
 );
};