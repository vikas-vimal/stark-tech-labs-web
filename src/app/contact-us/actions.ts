"use server";

export type ContactFormValuesType = {
  name?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  companyName?: string;
  message?: string;
};

export async function submitContactForm(formValues: ContactFormValuesType) {
  console.log(formValues);

  return;
}
