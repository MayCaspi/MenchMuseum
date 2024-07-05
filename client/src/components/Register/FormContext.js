import React, { createContext } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      museumName: '',
      terms: false,
      selectedPlan: '',
      paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        email: '',
        address: '',
        country: 'Israel',
      }
    }
  });

  const nextStep = () => methods.setValue('step', methods.getValues('step') + 1);
  const prevStep = () => methods.setValue('step', methods.getValues('step') - 1);

  return (
    <FormContext.Provider value={{ ...methods, nextStep, prevStep }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext, useFormContext };
