import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Building, Truck, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-aura-navy text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-bold text-3xl md:text-4xl text-center">
            About Aura Bliss
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
            Your trusted partner for premium electrical products in Ahmedabad,
            Gujarat
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Aura Bliss has grown to become a leading
                electrical trading company in Ahmedabad, Gujarat. What started
                as a small venture has now evolved into a trusted name in the
                electrical products industry.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been driven by a simple philosophy: provide
                high-quality electrical products that ensure safety,
                reliability, and customer satisfaction. We take pride in
                offering a comprehensive range of electrical solutions to meet
                diverse needs.
              </p>
              <p className="text-gray-700">
                Today, Aura Bliss serves a wide clientele including homeowners,
                electricians, contractors, builders, and industrial customers
                throughout Ahmedabad and surrounding areas in Gujarat.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500">Company Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="font-bold text-2xl mb-4 text-aura-blue">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide high-quality electrical products that ensure safety,
                reliability, and customer satisfaction while maintaining
                competitive pricing and exceptional service.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Deliver premium quality electrical products",
                  "Ensure customer satisfaction through excellent service",
                  "Maintain competitive pricing with no compromise on quality",
                  "Provide expert guidance for optimal electrical solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className="text-aura-blue mr-2 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="font-bold text-2xl mb-4 text-aura-blue">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the most trusted and preferred supplier of electrical
                products in Gujarat, recognized for our commitment to quality,
                customer service, and technical expertise.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Become the leading electrical products supplier in Gujarat",
                  "Set industry standards for product quality and service",
                  "Build long-term relationships based on trust and reliability",
                  "Continuously expand our product range to meet evolving needs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className="text-aura-blue mr-2 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center">
            Why Choose Aura Bliss
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Building className="text-aura-blue" size={40} />,
                title: "Established Presence",
                description:
                  "Over a decade of experience in the electrical products industry in Ahmedabad.",
              },
              {
                icon: <Award className="text-aura-blue" size={40} />,
                title: "Quality Assurance",
                description:
                  "We only deal with certified products that meet industry standards.",
              },
              {
                icon: <Truck className="text-aura-blue" size={40} />,
                title: "Timely Delivery",
                description:
                  "Efficient logistics ensuring your products reach you on schedule.",
              },
              {
                icon: <Users className="text-aura-blue" size={40} />,
                title: "Expert Team",
                description:
                  "Knowledgeable staff to provide technical guidance and support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-card text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center">
            Brands We Carry
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            We are authorized distributors for these leading electrical brands,
            ensuring you get genuine products with warranty.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((brand) => (
              <div
                key={brand}
                className="bg-white h-32 rounded-lg shadow-sm flex items-center justify-center"
              >
                <span className="text-gray-400">Brand Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-aura-blue rounded-xl text-white p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-bold text-2xl md:text-3xl mb-4">
                Ready to Work with Us?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Whether you need electrical products for a small home project or
                a large commercial installation, we've got you covered. Contact
                our team today for expert advice and competitive quotes.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-aura-blue hover:bg-gray-100"
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
