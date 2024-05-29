export type IContactFormState = {
  errors?: {
    name?: string;
    email?: string;
    countryCode?: string;
    phone?: string;
    companyName?: string;
    message?: string;
  };
  message?: string | null;
};
