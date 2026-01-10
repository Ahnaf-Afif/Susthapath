import { ArrowLeft, Bed, Activity, Scan, Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface BookingPageProps {
  onBack: () => void;
}

export function BookingPage({ onBack }: BookingPageProps) {
  const hospitals = [
    { 
      name: "Square Hospital", 
      location: "Panthapath, Dhaka",
      beds: 12,
      icu: 4,
      rating: 4.8,
      price: "৳8,000-15,000"
    },
    { 
      name: "United Hospital", 
      location: "Gulshan, Dhaka",
      beds: 8,
      icu: 2,
      rating: 4.9,
      price: "৳10,000-18,000"
    },
    { 
      name: "Apollo Hospital", 
      location: "Bashundhara, Dhaka",
      beds: 15,
      icu: 6,
      rating: 4.7,
      price: "৳9,000-16,000"
    },
  ];

  const icuTypes = [
    { type: "ICU", name: "Intensive Care Unit", available: 8, price: "৳15,000/day" },
    { type: "HDU", name: "High Dependency Unit", available: 12, price: "৳12,000/day" },
    { type: "NICU", name: "Neonatal ICU", available: 6, price: "৳18,000/day" },
    { type: "CCU", name: "Coronary Care Unit", available: 5, price: "৳16,000/day" },
  ];

  const scanTypes = [
    { name: "MRI Scan", hospitals: 8, price: "৳8,000-15,000", time: "45-60 min" },
    { name: "CT Scan", hospitals: 12, price: "৳5,000-10,000", time: "15-30 min" },
    { name: "X-Ray", hospitals: 20, price: "৳800-1,500", time: "5-10 min" },
    { name: "Ultrasound", hospitals: 18, price: "৳1,500-3,000", time: "20-30 min" },
    { name: "Mammography", hospitals: 6, price: "৳3,000-5,000", time: "30 min" },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-orange-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-orange-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-white">Booking & Information</h1>
            <p className="text-orange-100 text-sm">Hospital Beds & Medical Scans</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-6">
          {/* Quick Booking Options */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Bed className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-sm text-gray-900">Hospital Seat</h3>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-red-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Activity className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-sm text-gray-900">ICU/CCU</h3>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Scan className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-sm text-gray-900">MRI/CT Scan</h3>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-purple-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-sm text-gray-900">Schedule Scan</h3>
              </CardContent>
            </Card>
          </div>

          {/* Hospital Bed Availability */}
          <div>
            <h2 className="text-gray-900 mb-4">Hospital Bed Availability</h2>
            <div className="space-y-3">
              {hospitals.map((hospital, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{hospital.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{hospital.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded">
                        <span className="text-yellow-500">★</span>
                        <span className="text-xs">{hospital.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {hospital.beds} Beds
                        </Badge>
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          {hospital.icu} ICU
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-600">{hospital.price}/day</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Book Seat
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ICU/HDU/NICU/CCU Booking */}
          <div>
            <h2 className="text-gray-900 mb-4">Critical Care Units</h2>
            <div className="space-y-3">
              {icuTypes.map((icu, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <Activity className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-gray-900">{icu.type}</h3>
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                                {icu.available} Available
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500">{icu.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-red-600">{icu.price}</span>
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

          {/* Scan Booking */}
          <div>
            <h2 className="text-gray-900 mb-4">Medical Scans & Imaging</h2>
            <div className="space-y-3">
              {scanTypes.map((scan, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Scan className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-gray-900 mb-1">{scan.name}</h3>
                            <p className="text-xs text-gray-500">{scan.hospitals} hospitals • {scan.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-blue-600">{scan.price}</span>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Schedule
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
