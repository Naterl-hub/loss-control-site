"use client";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
          <h1 className="text-xl font-bold">Loss Control Solutions</h1>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-100">
        <h2 className="text-4xl font-extrabold mb-4">Protecting What Matters Most</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Specialized Loss Control and Risk Management Solutions for Safer Businesses.
        </p>
        <Button className="text-lg">Request a Consultation</Button>
      </section>

      {/* About Preview */}
      <section id="about" className="py-16 px-6 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Experienced. Reliable. Compliant.</h3>
        <p className="max-w-2xl mx-auto mb-6">
          With years of experience in risk mitigation, we help businesses reduce exposure,
          improve workplace safety, and maintain regulatory compliance.
        </p>
        <Button variant="outline">Learn More About Us</Button>
      </section>

      {/* Services Snapshot */}
      <section id="services" className="py-16 px-6 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-8">Our Services</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">Site Safety Inspections</div>
          <div className="bg-white p-6 rounded-xl shadow">Compliance Audits</div>
          <div className="bg-white p-6 rounded-xl shadow">Policy & Procedure Reviews</div>
          <div className="bg-white p-6 rounded-xl shadow">Risk Assessment & Mitigation Planning</div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 px-6 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-8">Project Highlights</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow">Manufacturing Plant Audit</div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">Warehouse Safety Plan</div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">Construction Site Risk Review</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h3 className="text-2xl font-semibold mb-8">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-xl shadow">10+ Years Experience</div>
          <div className="bg-blue-50 p-6 rounded-xl shadow">Certified Safety Professionals</div>
          <div className="bg-blue-50 p-6 rounded-xl shadow">Proven Reduction in Claims</div>
        </div>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="py-16 px-6 bg-blue-100 text-center">
        <h3 className="text-2xl font-semibold mb-4">Need help with safety and compliance?</h3>
        <Button className="text-lg">Contact Us</Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} Loss Control Solutions. All rights reserved.
      </footer>
    </main>
  );
}
