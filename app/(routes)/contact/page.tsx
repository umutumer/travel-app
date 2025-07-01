import ContactForm from "@/components/contact/ContactForm";
import ContactInformation from "@/components/contact/ContactInformation";
import PagesHero from "@/components/PagesHero";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <PagesHero />
      <div className="flex flex-col md:flex-row flex-wrap  md:px-20">
        <div className="flex-1/3">
          <ContactInformation />
        </div>
        <div className="flex-1/3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
