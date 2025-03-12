import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-navy to-aura-blue text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                Premium Electrical Solutions for Your Home & Business
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Aura Bliss is Ahmedabad's trusted provider of high-quality
                electrical products including switches, wires, MCBs, and more.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-aura-orange hover:bg-orange-600 text-white"
                >
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              {/* This would typically be an image, using placeholder text for now */}
              <div className="bg-white/10 rounded-lg p-10 h-[400px] flex items-center justify-center">
                <p className="text-xl font-semibold text-center">
                  Hero Image Placeholder
                  <br />
                  (Electrical Products Display)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">
              Our Premium Product Range
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of high-quality electrical
              products designed for safety, reliability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Switches & Sockets",
                description:
                  "Premium modular switches with elegant designs and durability.",
                image: "bg-gray-200",
              },
              {
                title: "Wires & Cables",
                description:
                  "High-quality, fire-resistant wires for complete safety.",
                image: "bg-gray-200",
              },
              {
                title: "MCBs & DBs",
                description:
                  "Reliable circuit protection for residential and commercial use.",
                image: "bg-gray-200",
              },
              {
                title: "LED Lighting",
                description:
                  "Energy-efficient lighting solutions for all spaces.",
                image: "bg-gray-200",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-card transition-all hover:shadow-lg"
              >
                <div
                  className={`${category.image} h-48 flex items-center justify-center`}
                >
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-aura-blue hover:text-blue-700 font-medium"
                  >
                    View Products <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-aura-blue hover:bg-blue-600"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">
              Why Choose Aura Bliss
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on delivering excellence in every aspect of our
              business, from product quality to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-aura-blue" size={32} />,
                title: "Quality Assurance",
                description:
                  "All our products meet the highest industry standards and certifications.",
              },
              {
                icon: <Shield className="text-aura-blue" size={32} />,
                title: "Genuine Products",
                description:
                  "We only deal with authentic products from trusted manufacturers.",
              },
              {
                icon: <Award className="text-aura-blue" size={32} />,
                title: "Expert Guidance",
                description:
                  "Our team provides professional advice to help you make the right choice.",
              },
              {
                icon: <Users className="text-aura-blue" size={32} />,
                title: "Customer Support",
                description:
                  "We offer excellent after-sales service and technical support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-aura-lightblue">
        <div className="container mx-auto px-4">
          <div className="bg-aura-blue rounded-xl text-white p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-bold text-3xl md:text-4xl mb-4">
                Ready to Transform Your Electrical Setup?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Whether you're renovating or building new, our extensive range
                of electrical products has you covered. Get in touch for expert
                advice and quotations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-aura-blue hover:bg-gray-100"
                >
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10"
                >
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
