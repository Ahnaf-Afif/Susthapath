import { ArrowLeft, Ambulance, TestTube, Heart, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface LogisticsPageProps {
  onBack: () => void;
}

export function LogisticsPage({ onBack }: LogisticsPageProps) {
  const ambulanceServices = [
    { name: "Emergency Ambulance", type: "ICU Equipped", price: "৳5,000", time: "5 min" },
    { name: "Basic Ambulance", type: "Non-ICU", price: "৳2,500", time: "10 min" },
    { name: "Freezing Ambulance", type: "Mortuary", price: "৳3,500", time: "15 min" },
  ];

  const labTests = [
    { name: "Complete Blood Count (CBC)", price: "৳400-800", centers: 12 },
    { name: "Lipid Profile", price: "৳800-1,200", centers: 10 },
    { name: "Thyroid Function Test", price: "৳1,000-1,500", centers: 8 },
    { name: "HbA1c (Diabetes)", price: "৳600-1,000", centers: 15 },
    { name: "Liver Function Test", price: "৳900-1,400", centers: 11 },
  ];

  const careServices = [
    { name: "Home Nursing", price: "৳1,500/day", duration: "8-12 hours" },
    { name: "Physiotherapy", price: "৳800/session", duration: "1 hour" },
    { name: "Wound Dressing", price: "৳500/visit", duration: "30 min" },
    { name: "Injection Service", price: "৳200/visit", duration: "15 min" },
    { name: "Catheterization", price: "৳1,000/visit", duration: "45 min" },
  ];

  const diagnosticCenters = [
    { name: "Popular Diagnostic", area: "Dhanmondi", rating: 4.8 },
    { name: "IBN SINA", area: "Gulshan", rating: 4.7 },
    { name: "Labaid", area: "Uttara", rating: 4.6 },
    { name: "United Hospital Lab", area: "Gulshan", rating: 4.9 },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-red-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-red-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-white">Medical Logistics</h1>
            <p className="text-red-100 text-sm">Emergency & Care Services</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-6">
          {/* Emergency Ambulance Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Ambulance Service</h2>
              <Button className="bg-red-500 hover:bg-red-600">
                <Phone className="h-4 w-4 mr-1" />
                Call 999
              </Button>
            </div>
            <div className="space-y-3">
              {ambulanceServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <Ambulance className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-gray-900">{service.name}</h3>
                            <p className="text-sm text-gray-500">{service.type}</p>
                          </div>
                          <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.time}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-red-600">{service.price}</span>
                          <Button size="sm" className="bg-red-500 hover:bg-red-600">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Lab Tests Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Lab Tests</h2>
              <Button variant="ghost" size="sm" className="text-red-600">
                View All
              </Button>
            </div>
            <Card className="border-0 shadow-md mb-4 bg-gradient-to-r from-purple-500 to-pink-600">
              <CardContent className="p-4">
                <h3 className="text-white mb-1">Home Sample Collection</h3>
                <p className="text-purple-50 text-sm mb-3">We'll collect samples from your home</p>
                <Button className="bg-white text-purple-600 hover:bg-purple-50" size="sm">
                  Book Collection
                </Button>
              </CardContent>
            </Card>
            <div className="space-y-2">
              {labTests.map((test, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <TestTube className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-sm text-gray-900">{test.name}</h3>
                          <p className="text-xs text-gray-500">{test.centers} centers available</p>
                        </div>
                      </div>
                      <span className="text-sm text-purple-600">{test.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Diagnostic Centers */}
          <div>
            <h2 className="text-gray-900 mb-4">Top Diagnostic Centers</h2>
            <div className="grid grid-cols-2 gap-3">
              {diagnosticCenters.map((center, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-3">
                    <h3 className="text-sm text-gray-900 mb-2">{center.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{center.area}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-xs">{center.rating}</span>
                      </div>
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        View Prices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Care Services Section */}
          <div>
            <h2 className="text-gray-900 mb-4">Care Services</h2>
            <div className="space-y-3">
              {careServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-pink-100 p-3 rounded-xl">
                        <Heart className="h-6 w-6 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-gray-900">{service.name}</h3>
                            <p className="text-sm text-gray-500">{service.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-red-600">{service.price}</span>
                          <Button size="sm" className="bg-red-500 hover:bg-red-600">
                            Book Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
