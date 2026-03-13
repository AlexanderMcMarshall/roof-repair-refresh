import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail, ExternalLink, Navigation, Clock } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Message Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">
            Contact us by phone or email to learn more about our Roofing options in Spring, TX for homeowners.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Phone Number */}
                <a
                  href="tel:9362595222"
                  className="group block rounded-xl bg-card p-5 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-muted-foreground">Call for Emergency Service</p>
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <p className="text-lg font-bold text-foreground">(936) 259-5222</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@vargasandsonsroofing.com"
                  className="group block rounded-xl bg-card p-5 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-muted-foreground">Send us an Email</p>
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <p className="text-lg font-bold text-foreground">info@vargasandsonsroofing.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </a>

                <div className="space-y-4">
                  {/* Address Card */}
                  <a
                    href="https://maps.app.goo.gl/6kfA7mEkgdrhadJZ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl bg-card p-5 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-accent/10 p-3 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-muted-foreground">Visit Our Location</p>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <p className="font-bold text-foreground text-lg">Vargas & Sons Roof Repair</p>
                        <p className="text-muted-foreground">2069 Rayford Rd</p>
                        <p className="text-muted-foreground">Spring, TX 77386</p>
                      </div>
                    </div>
                  </a>

                  {/* Get Directions Button */}
                  <a
                    href="https://maps.app.goo.gl/6kfA7mEkgdrhadJZ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-accent-foreground font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-md hover:scale-105"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>

                  {/* Business Hours */}
                  <div className="rounded-xl bg-card p-5 shadow-sm border border-border">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-accent/10 p-3 text-accent">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Business Hours</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Mon - Fri:</span>
                            <span className="font-medium text-foreground">7:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Saturday:</span>
                            <span className="font-medium text-foreground">8:00 AM - 4:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sunday:</span>
                            <span className="font-medium text-foreground">Emergency Only</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-card p-6 shadow-sm border border-border md:p-8">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Your Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Contact Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Tell us about your roofing needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50 resize-none"
                    placeholder="Describe your roofing issue or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-accent px-6 py-3 text-accent-foreground font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 text-green-800">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium">Message sent successfully!</p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">We'll be in touch within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
