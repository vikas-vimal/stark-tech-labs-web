"use client";
import React, { useState } from "react";
import { ContactFormValuesType, submitContactForm } from "../actions";
import ErrorText from "@/global/ErrorText";
import { ContactFormSchema } from "@/lib/schema/contact-form.schema";

function ContactUsForm() {
  const [errors, setErrors] = useState<ContactFormValuesType>({
    name: undefined,
    email: undefined,
    countryCode: undefined,
    phone: undefined,
    companyName: undefined,
    message: undefined,
  });

  const formSubmitActionHandler = async (formData: FormData) => {
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

      setErrors({
        name: issues.fieldErrors.name?.[0],
        email: issues.fieldErrors.name?.[0],
        countryCode: issues.fieldErrors.countryCode?.[0],
        phone: issues.fieldErrors.name?.[0],
        companyName: issues.fieldErrors.name?.[0],
        message: issues.fieldErrors.name?.[0],
      });
    }

    await submitContactForm(formValues);
  };

  return (
    <form
      action={formSubmitActionHandler}
      className="flex flex-col items-center md:items-start justify-center gap-4"
    >
      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Name</span>
        <input type="text" className="flex-1" placeholder="John Doe" name="name" />
        {errors.name ? <p className="text-red-400 text-xs mt-1">{errors.name}</p> : null}
      </label>

      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Email</span>
        <input
          type="email"
          placeholder="john@example.com"
          className="flex-1"
          name="email"
        />
        {errors.email ? (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        ) : null}
      </label>
      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Phone</span>
        <div className="flex">
          <select name="countryCode" className="rounded-r-none pl-3 pr-0 border-r">
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+62">+62</option>
            <option value="+966">+966</option>
          </select>
          <input
            type="tel"
            placeholder="9876543210"
            className="flex-1 rounded-l-none"
            name="phone"
          />
        </div>
        {errors.countryCode ? (
          <p className="text-red-400 text-xs mt-1">{errors.countryCode}</p>
        ) : null}
        {errors.phone ? (
          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
        ) : null}
      </label>

      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Company Name</span>
        <input
          type="text"
          placeholder="My Company LLC"
          className="flex-1"
          name="companyName"
        />
        {errors.companyName ? (
          <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>
        ) : null}
      </label>

      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Message</span>
        <textarea
          rows={5}
          placeholder="Here goes the message..."
          className="flex-1"
          name="message"
        ></textarea>
        {errors.message ? (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        ) : null}
      </label>

      <div>
        <button type="submit" className="primary-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactUsForm;
