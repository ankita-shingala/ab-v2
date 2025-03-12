import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-aura-navy text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-bold text-3xl md:text-4xl text-center">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
            Have questions or need assistance? Reach out to our team for prompt
            and helpful service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-bold text-2xl md:text-3xl mb-6">
                Send Us a Message
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Inquiry subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message or inquiry"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-aura-blue hover:bg-blue-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-bold text-2xl md:text-3xl mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-card">
                  <div className="flex items-start space-x-4">
                    <MapPin
                      className="text-aura-blue flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Our Location
                      </h3>
                      <address className="not-italic text-gray-600">
                        123 Electrical Market,
                        <br />
                        C.G. Road, Ahmedabad,
                        <br />
                        Gujarat 380009
                      </address>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-card">
                  <div className="flex items-start space-x-4">
                    <Phone
                      className="text-aura-blue flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Phone Numbers
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+919898123456"
                          className="hover:text-aura-blue transition-colors"
                        >
                          +91 98981 23456
                        </a>
                        <br />
                        <a
                          href="tel:+917940123456"
                          className="hover:text-aura-blue transition-colors"
                        >
                          +91 79 4012 3456
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-card">
                  <div className="flex items-start space-x-4">
                    <Mail
                      className="text-aura-blue flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@aurabliss.com"
                          className="hover:text-aura-blue transition-colors"
                        >
                          info@aurabliss.com
                        </a>
                        <br />
                        <a
                          href="mailto:sales@aurabliss.com"
                          className="hover:text-aura-blue transition-colors"
                        >
                          sales@aurabliss.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-card">
                  <div className="flex items-start space-x-4">
                    <Clock
                      className="text-aura-blue flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Google Map will be embedded here</p>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Conveniently located in the heart of Ahmedabad's electrical market,
            making it easy for you to visit us.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
