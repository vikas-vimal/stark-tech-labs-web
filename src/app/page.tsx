"use client";

import { TrustedPartners } from "@/constants/trusted-partners.constant";
import Image from "next/image";
import ContactUsForm from "./contact-us/form/contact-form/ContactUsForm";
import { ReviewScreenshots } from "@/constants/review-ss.constant";

export default function Home() {
  // Function to handle the scroll
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="text-gray-200">
      <section className="hero-bg flex flex-col items-center justify-center p-6 md:pt-24 min-h-svh md:min-h-[700px]">
        <div className="">
          <h1 className="text-center md:text-3xl">
            <span className="block leading-[1.6em]">
              A team of passionate software engineers,
              <br />
              helping you build your
            </span>
            <span className="font-bold text-5xl md:text-7xl pt-4 inline-block text-transparent bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text">
              J.A.R.V.I.S
            </span>
          </h1>
        </div>
        <div className="mt-0 md:mt-24 translate-y-36 md:translate-y-0">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            <button className="border border-opacity-20 hover:border-opacity-40 bg-blue-600 hover:bg-blue-500 active:opacity-60 border-white py-3 px-8 rounded-full inline-block font-semibold">
              Explore our Services
            </button>
          </a>
        </div>
      </section>

      <section className="py-0 container mx-auto px-8">
        {/* <div className="text-center mb-4"></div> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <h2 className="font-normal opacity-50 md:max-w-48">
            Trusted by Startup Founders & Tech-VCs
          </h2>
          <div className="flex flex-row items-center justify-center gap-5">
            {TrustedPartners.map((item, index) => (
              <Image
                key={index}
                src={item.logoSrc}
                alt={item.title}
                className="dark:invert invert opacity-80"
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-32 min-h-96 container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium">Things we can do for you.</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="service-card">
            <Image
              src="/icons/browser.svg"
              alt="YC Logo"
              className="mb-4 invert"
              width={30}
              height={30}
              priority
            />
            <h3 className="text-lg md:text-2xl">Web Applications</h3>
          </div>
          <div className="service-card">
            <Image
              src="/icons/designtools.svg"
              alt="YC Logo"
              className="mb-4 invert"
              width={30}
              height={30}
              priority
            />
            <h3 className="text-lg md:text-2xl">UX/UI Design</h3>
          </div>
          <div className="service-card">
            <Image
              src="/icons/dashboard.svg"
              alt="YC Logo"
              className="mb-4 invert"
              width={30}
              height={30}
              priority
            />
            <h3 className="text-lg md:text-2xl">Dashboards</h3>
          </div>
          <div className="service-card">
            <Image
              src="/icons/workflow.svg"
              alt="YC Logo"
              className="mb-4 invert"
              width={30}
              height={30}
              priority
            />
            <h3 className="text-lg md:text-2xl">Automation</h3>
          </div>
        </div>
      </section>

      <section className="py-14 min-h-40 container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium">Why us?</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
          <div className="md:w-1/4 p-3">
            <h4 className="font-bold md:font-semibold mb-2 md:text-lg">
              On Time Delivery
            </h4>
            <p className="opacity-80">
              You don’t have to think about dealing with any delays. Our expert team is
              confident to design, develop, and deliver on time for a seamless experience.
            </p>
          </div>
          <div className="md:w-1/4 p-3">
            <h4 className="font-bold md:font-semibold mb-2 md:text-lg">Process Driven</h4>
            <p className="opacity-80">
              From start to end, we follow agile methodology on our projects. We execute
              the process for continuous improvement discovering solutions for you.
            </p>
          </div>
          <div className="md:w-1/4 p-3">
            <h4 className="font-bold md:font-semibold mb-2 md:text-lg">
              Engineering Mindset
            </h4>
            <p className="opacity-80">
              Every developer here works with an Engineering mindset. This allows us to
              work on creative solutions and build our own libraries uniquely.
            </p>
          </div>
          <div className="md:w-1/4 p-3">
            <h4 className="font-bold md:font-semibold mb-2 md:text-lg">User Driven</h4>
            <p className="opacity-80">
              How end users interact with the product becomes extremely important in this
              journey. We understand and value this in our software building process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 container mx-auto px-8">
        {/* <div className="text-center mb-4"></div> */}
        <div className="flex flex-row items-center justify-center gap-5">
          {/* <h2 className="font-normal opacity-50">
            Trusted by Startup Founders & Tech-VCs
          </h2> */}
          {ReviewScreenshots.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <Image
                src={item.imageUrl}
                alt={item.url}
                className="opacity-90 rounded-2xl"
                width={380}
                height={380}
              />
            </a>
          ))}
        </div>
      </section>

      <section className="py-14 min-h-40 container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium">Get in touch</h2>
        </div>
        <div className="max-w-[500px] mx-auto">
          <ContactUsForm />
        </div>
      </section>
    </main>
  );
}
