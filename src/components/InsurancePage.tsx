import { ArrowLeft, Shield, Check, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface InsurancePageProps {
  onBack: () => void;
}

export function InsurancePage({ onBack }: InsurancePageProps) {
  const plans = [
    {
      name: "Basic Health",
      price: "৳5,000",
      period: "per year",
      coverage: "৳2,00,000",
      features: [
        "Hospitalization Coverage",
        "Emergency Care",
        "Basic Lab Tests",
        "Consultation (10 visits/year)"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Family Care",
      price: "৳15,000",
      period: "per year",
      coverage: "৳5,00,000",
      features: [
        "Coverage for 4 members",
        "All Basic features",
        "Maternity Benefits",
        "Annual Health Checkup",
        "Medicine Coverage 50%"
      ],
      color: "from-emerald-500 to-emerald-600",
      recommended: true
    },
    {
      name: "Premium Plus",
      price: "৳25,000",
      period: "per year",
      coverage: "৳10,00,000",
      features: [
        "All Family Care features",
        "International Treatment",
        "Critical Illness Cover",
        "Unlimited Consultations",
        "Medicine Coverage 80%",
        "Dental & Eye Care"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    "Cashless Treatment at 500+ Hospitals",
    "24/7 Customer Support",
    "No Pre-medical Tests Required",
    "Quick Claim Settlement",
    "Coverage from Day 1"
  ];

  const partners = [
    "Square Hospital", "United Hospital", "Apollo Hospital",
    "Evercare Hospital", "BIRDEM Hospital", "Labaid Hospital"
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-indigo-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-indigo-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-white">Medical Insurance</h1>
            <p className="text-indigo-100 text-sm">Protect your health & finances</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-6">
          {/* Hero Section */}
          <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
            <CardContent className="p-6 text-center">
              <Shield className="h-16 w-16 text-white mx-auto mb-3 opacity-90" />
              <h2 className="text-white mb-2">Secure Your Health Today</h2>
              <p className="text-indigo-50 text-sm mb-4">
                Get comprehensive health insurance coverage for you and your family
              </p>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                Get Free Quote
              </Button>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div>
            <h2 className="text-gray-900 mb-4">Why Choose Our Insurance?</h2>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                  <div className="bg-green-500 p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Plans */}
          <div>
            <h2 className="text-gray-900 mb-4">Choose Your Plan</h2>
            <div className="space-y-4">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg overflow-hidden ${plan.recommended ? 'ring-2 ring-emerald-500' : ''}`}
                >
                  {plan.recommended && (
                    <div className="bg-emerald-500 text-white text-center py-1 text-xs">
                      ⭐ Most Popular
                    </div>
                  )}
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${plan.color} p-5 text-white`}>
                      <h3 className="text-xl mb-1">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl">{plan.price}</span>
                        <span className="text-white/80 text-sm">{plan.period}</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/20">
                        <p className="text-sm text-white/90">Coverage up to</p>
                        <p className="text-xl">{plan.coverage}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-sm text-gray-600 mb-3">Plan Features:</h4>
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}
                      >
                        Select Plan
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partner Hospitals */}
          <div>
            <h2 className="text-gray-900 mb-4">Partner Hospitals</h2>
            <Card className="border-0 shadow-md">
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Get cashless treatment at 500+ hospitals including:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {partners.map((hospital, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
                    >
                      <div className="bg-indigo-100 p-1.5 rounded">
                        <Shield className="h-3 w-3 text-indigo-600" />
                      </div>
                      <span className="text-xs text-gray-700">{hospital}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-3" size="sm">
                  View All Partners
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-md bg-gray-50">
            <CardContent className="p-5 text-center">
              <h3 className="text-gray-900 mb-2">Need Help Choosing?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our insurance experts are here to help you
              </p>
              <div className="flex gap-3">
                <Button className="flex-1 bg-indigo-500 hover:bg-indigo-600">
                  Call Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Chat with Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
