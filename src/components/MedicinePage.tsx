import { ArrowLeft, Pill, Info, ShoppingCart, Stethoscope, Search, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface MedicinePageProps {
  onBack: () => void;
}

export function MedicinePage({ onBack }: MedicinePageProps) {
  const medicines = [
    { 
      name: "Napa (Paracetamol)", 
      type: "Pain Relief",
      strength: "500mg",
      price: "৳2.50",
      manufacturer: "Beximco",
      inStock: true,
      prescription: false
    },
    { 
      name: "Seclo (Omeprazole)", 
      type: "Gastric",
      strength: "20mg",
      price: "৳8.00",
      manufacturer: "Square",
      inStock: true,
      prescription: true
    },
    { 
      name: "Ace (Lisinopril)", 
      type: "Blood Pressure",
      strength: "5mg",
      price: "৳12.00",
      manufacturer: "Square",
      inStock: true,
      prescription: true
    },
    { 
      name: "Amodis (Amlodipine)", 
      type: "Hypertension",
      strength: "5mg",
      price: "৳6.50",
      manufacturer: "Incepta",
      inStock: true,
      prescription: true
    },
  ];

  const equipment = [
    { 
      name: "Digital Thermometer", 
      price: "৳450",
      brand: "Omron",
      rating: 4.5,
      inStock: true
    },
    { 
      name: "Blood Pressure Monitor", 
      price: "৳3,500",
      brand: "Omron",
      rating: 4.8,
      inStock: true
    },
    { 
      name: "Glucose Monitor Kit", 
      price: "৳2,800",
      brand: "Accu-Chek",
      rating: 4.7,
      inStock: true
    },
    { 
      name: "Pulse Oximeter", 
      price: "৳1,200",
      brand: "Beurer",
      rating: 4.6,
      inStock: true
    },
  ];

  const categories = [
    "Pain Relief", "Antibiotics", "Vitamins", "Gastric", 
    "Diabetes", "Heart", "Respiratory", "Skin Care"
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-purple-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-purple-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-white">Medicine & Equipment</h1>
            <p className="text-purple-100 text-sm">Order medicines & medical equipment</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search medicines or equipment..." 
              className="pl-10"
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-3 text-center">
                <div className="bg-purple-100 p-2.5 rounded-lg w-fit mx-auto mb-1.5">
                  <Info className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-xs text-gray-700">Medicine Info</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-3 text-center">
                <div className="bg-green-100 p-2.5 rounded-lg w-fit mx-auto mb-1.5">
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-xs text-gray-700">Order Medicine</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-3 text-center">
                <div className="bg-blue-100 p-2.5 rounded-lg w-fit mx-auto mb-1.5">
                  <Stethoscope className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-xs text-gray-700">Equipment</p>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1.5 cursor-pointer hover:bg-purple-50">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="medicines" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="medicines">Medicines</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
            </TabsList>

            {/* Medicines Tab */}
            <TabsContent value="medicines" className="space-y-3">
              {medicines.map((medicine, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <Pill className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-gray-900">{medicine.name}</h3>
                            <p className="text-sm text-gray-500">{medicine.type} • {medicine.strength}</p>
                          </div>
                          {medicine.prescription && (
                            <Badge variant="outline" className="text-xs bg-red-50 text-red-600">
                              Rx
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mb-2">{medicine.manufacturer}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-purple-600">{medicine.price}</span>
                            <span className="text-xs text-gray-500 ml-1">per piece</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="h-8">
                              <Info className="h-3 w-3 mr-1" />
                              Info
                            </Button>
                            <Button size="sm" className="bg-purple-500 hover:bg-purple-600 h-8">
                              <ShoppingCart className="h-3 w-3 mr-1" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Equipment Tab */}
            <TabsContent value="equipment" className="space-y-3">
              {equipment.map((item, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Stethoscope className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.brand}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{item.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-purple-600">{item.price}</span>
                          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            Order Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Upload Prescription Banner */}
          <Card className="border-0 shadow-lg mt-6 bg-gradient-to-r from-purple-500 to-pink-600">
            <CardContent className="p-4 text-center">
              <h3 className="text-white mb-1">Need Prescription Medicines?</h3>
              <p className="text-purple-50 text-sm mb-3">Upload your prescription and we'll deliver</p>
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Upload Prescription
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
