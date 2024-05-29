import React from "react";
import { IContactFormState } from "./contact-form.interface";
import { useFormStatus } from "react-dom";
import LoadingSpinner from "@/app/global/LoadingSpinner";

function ContactFormFields({ formState }: { formState: IContactFormState }) {
  const { pending } = useFormStatus();

  return (
    <fieldset
      disabled={pending}
      className="flex flex-col items-center md:items-center justify-center gap-4"
    >
      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Name</span>
        <input type="text" className="flex-1" placeholder="John Doe" name="name" />
        {formState.errors?.name ? (
          <p className="text-red-400 text-xs mt-1">{formState.errors?.name}</p>
        ) : null}
      </label>

      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Email</span>
        <input
          type="email"
          placeholder="john@example.com"
          className="flex-1"
          name="email"
        />
        {formState.errors?.email ? (
          <p className="text-red-400 text-xs mt-1">{formState.errors?.email}</p>
        ) : null}
      </label>
      <label className="flex flex-col w-full">
        <span className="block text-sm font-medium mb-1 pl-1">Phone</span>
        <div className="flex">
          <select
            name="countryCode"
            className="rounded-r-none pl-3 pr-0 border-r border-gray-500"
          >
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
        {formState.errors?.countryCode ? (
          <p className="text-red-400 text-xs mt-1">{formState.errors?.countryCode}</p>
        ) : null}
        {formState.errors?.phone ? (
          <p className="text-red-400 text-xs mt-1">{formState.errors?.phone}</p>
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
        {formState.errors?.companyName ? (
          <p className="text-red-400 text-xs mt-1">{formState.errors?.companyName}</p>
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
        {formState.errors?.message ? (
          <p className="text-red-400 text-xs mt-1">{formState.errors?.message}</p>
        ) : null}
      </label>

      <div>
        <button type="submit" className="primary-button">
          <span className="inline-flex items-center justify-center gap-2">
            <span>Submit</span>
            {pending ? (
              <LoadingSpinner className="transform translate-y-[3px] translate-x-2" />
            ) : null}
          </span>
        </button>
      </div>
    </fieldset>
  );
}

export default ContactFormFields;
