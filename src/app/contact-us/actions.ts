"use server";

import connectMongo from "@/db/mongo.connection";
import ContactMessageModel from "@/lib/models/contact-message.model";
import { NextResponse } from "next/server";

export type ContactFormValuesType = {
  name?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  companyName?: string;
  message?: string;
};

export async function submitContactForm(formValues: ContactFormValuesType) {
  try {
    console.log("saving values...", formValues);
    await connectMongo();
    const newMessage = await ContactMessageModel.create({
      name: formValues.name,
      email: formValues.email,
      countryCode: formValues.countryCode,
      phone: formValues.phone,
      companyName: formValues.companyName,
      message: formValues.message,
    });
    console.log("values saved...", { newMessage });
    return JSON.stringify({
      success: true,
      code: 201,
      data: formValues,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.log(`---- ~ submitContactForm ~ error:`, error);
    return null;
  }
}
