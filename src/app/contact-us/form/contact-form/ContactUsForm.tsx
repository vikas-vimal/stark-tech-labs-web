"use client";
import React, { useRef, useState } from "react";
import { ContactFormValuesType, submitContactForm } from "../../actions";
import ErrorText from "@/app/global/ErrorText";
import { ContactFormSchema } from "@/lib/schema/contact-form.schema";
import { useFormState } from "react-dom";
import { IContactFormState } from "./contact-form.interface";
import ContactFormFields from "./ContactFormFields";
import { toast } from "react-toastify";

const initialFormState: IContactFormState = {
  errors: {
    name: undefined,
    email: undefined,
    countryCode: undefined,
    phone: undefined,
    companyName: undefined,
    message: undefined,
  },
  message: "",
};

function ContactUsForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(
    async (prevState: any, formData: FormData): Promise<IContactFormState> => {
      console.log("Handling form submit");

      const formValues = {
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
        countryCode: formData.get("countryCode")?.toString(),
        phone: formData.get("phone")?.toString(),
        companyName: formData.get("companyName")?.toString(),
        message: formData.get("message")?.toString(),
      };

      const validationResult = ContactFormSchema.safeParse(formValues);
      if (!validationResult.success) {
        const issues = validationResult.error.flatten();

        return {
          errors: {
            name: issues.fieldErrors.name?.[0],
            email: issues.fieldErrors.name?.[0],
            countryCode: issues.fieldErrors.countryCode?.[0],
            phone: issues.fieldErrors.name?.[0],
            companyName: issues.fieldErrors.name?.[0],
            message: issues.fieldErrors.name?.[0],
          },
          message: "Failed",
        };
      }

      const savedResult = await submitContactForm(formValues);
      if (savedResult) {
        const result = JSON.parse(savedResult);
        console.log(`---- ~ result:`, result);
        if (result.success) {
          formRef?.current?.reset();
          toast.success(result.message);
        } else {
          toast.error("Oops! Something went wrong. Please try again.");
        }
        return {
          errors: {},
          message: "Message sent successfully.",
        };
      }
      return {
        errors: {},
        message: "",
      };
    },
    initialFormState
  );
  return (
    <form action={formAction} ref={formRef}>
      <ContactFormFields formState={formState} />
    </form>
  );
}

export default ContactUsForm;
