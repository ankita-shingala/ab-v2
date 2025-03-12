import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Product categories and items
const productCategories = [
  {
    id: "switches",
    name: "Switches & Sockets",
    products: [
      {
        id: 1,
        name: "Modular Switches",
        description: "Modern design with superior finish",
        price: "₹300 onwards",
      },
      {
        id: 2,
        name: "Decorative Switches",
        description: "Elegant switches with premium finish",
        price: "₹450 onwards",
      },
      {
        id: 3,
        name: "Socket Outlets",
        description: "Safe and durable electrical sockets",
        price: "₹250 onwards",
      },
      {
        id: 4,
        name: "USB Charging Outlets",
        description: "Built-in USB charging ports",
        price: "₹650 onwards",
      },
    ],
  },
  {
    id: "wires",
    name: "Wires & Cables",
    products: [
      {
        id: 5,
        name: "PVC Insulated Wires",
        description: "Flame retardant domestic wiring",
        price: "₹1,500/bundle",
      },
      {
        id: 6,
        name: "FRLS Wires",
        description: "Fire-resistant low-smoke wires",
        price: "₹2,200/bundle",
      },
      {
        id: 7,
        name: "Coaxial Cables",
        description: "High-quality signal transmission cables",
        price: "₹900/roll",
      },
      {
        id: 8,
        name: "Industrial Cables",
        description: "Heavy-duty cables for commercial use",
        price: "₹3,500/roll",
      },
    ],
  },
  {
    id: "mcb",
    name: "MCBs & Distribution Boards",
    products: [
      {
        id: 9,
        name: "Single Pole MCB",
        description: "Reliable circuit protection",
        price: "₹200 onwards",
      },
      {
        id: 10,
        name: "RCCB Protection",
        description: "Residual current circuit breakers",
        price: "₹850 onwards",
      },
      {
        id: 11,
        name: "Distribution Boards",
        description: "Metal and plastic enclosures",
        price: "₹1,200 onwards",
      },
      {
        id: 12,
        name: "Isolators",
        description: "High-performance electrical isolators",
        price: "₹550 onwards",
      },
    ],
  },
  {
    id: "lighting",
    name: "LED Lighting",
    products: [
      {
        id: 13,
        name: "LED Bulbs",
        description: "Energy-efficient lighting",
        price: "₹120 onwards",
      },
      {
        id: 14,
        name: "LED Panel Lights",
        description: "Sleek design for modern interiors",
        price: "₹650 onwards",
      },
      {
        id: 15,
        name: "LED Strip Lights",
        description: "Flexible lighting for decoration",
        price: "₹350/meter",
      },
      {
        id: 16,
        name: "Outdoor LED Lights",
        description: "Weather-resistant lighting solutions",
        price: "₹850 onwards",
      },
    ],
  },
  {
    id: "fans",
    name: "Fans & Accessories",
    products: [
      {
        id: 17,
        name: "Ceiling Fans",
        description: "Energy-efficient with smooth operation",
        price: "₹1,500 onwards",
      },
      {
        id: 18,
        name: "Wall Fans",
        description: "Powerful air circulation",
        price: "₹1,200 onwards",
      },
      {
        id: 19,
        name: "Exhaust Fans",
        description: "Effective ventilation solutions",
        price: "₹850 onwards",
      },
      {
        id: 20,
        name: "Fan Regulators",
        description: "Speed control for all fan types",
        price: "₹350 onwards",
      },
    ],
  },
];

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("switches");

  return (
    <>
      {/* Page Header */}
      <section className="bg-aura-navy text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-bold text-3xl md:text-4xl text-center">
            Our Products
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
            Discover our comprehensive range of high-quality electrical products
            designed for safety, reliability, and performance.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="switches"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="mb-8 overflow-x-auto">
              <TabsList className="h-auto flex flex-nowrap p-1 w-full sm:w-auto">
                {productCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 whitespace-nowrap"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product) => (
                    <Card key={product.id} className="h-full">
                      <CardHeader>
                        <div className="bg-gray-200 h-40 mb-4 rounded flex items-center justify-center">
                          <span className="text-gray-500">Product Image</span>
                        </div>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-aura-blue">
                          {product.price}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full bg-aura-blue hover:bg-blue-600"
                          asChild
                        >
                          <a href="/contact">Enquire Now</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Request Quote */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-2xl md:text-3xl mb-4">
              Need a Customized Quote?
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're an individual customer, contractor, or business, we
              offer competitive pricing on bulk orders. Contact our team for
              personalized assistance.
            </p>
            <Button
              className="bg-aura-orange hover:bg-orange-600 text-white"
              size="lg"
              asChild
            >
              <a href="/contact">Request a Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
