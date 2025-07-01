"use client";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInformation = () => {
  return (
    <section className="p-8">

      <div className="space-y-6 text-gray-700">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
            <p className="mt-1 leading-relaxed">
              123 Main Street, <br />
              Istanbul, Turkey
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <p className="mt-1 leading-relaxed">+90 534 591 84 76</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="mt-1 leading-relaxed">utumer6@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
            <p className="mt-1 leading-relaxed">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
