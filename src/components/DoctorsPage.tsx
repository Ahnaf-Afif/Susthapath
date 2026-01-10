import { ArrowLeft, Calendar, Video, Phone, Home, Star, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface DoctorsPageProps {
  onBack: () => void;
}

export function DoctorsPage({ onBack }: DoctorsPageProps) {
  const doctors = [
    { 
      name: "Dr. Fatima Rahman", 
      specialty: "Cardiologist", 
      experience: "15 years",
      rating: 4.9,
      patients: 2500,
      fee: "৳1,200",
      hospital: "Dhaka Medical College",
      available: "Today, 3:00 PM"
    },
    { 
      name: "Dr. Kamal Ahmed", 
      specialty: "Neurologist", 
      experience: "12 years",
      rating: 4.8,
      patients: 1800,
      fee: "৳1,500",
      hospital: "Square Hospital",
      available: "Tomorrow, 10:00 AM"
    },
    { 
      name: "Dr. Nasrin Akter", 
      specialty: "Pediatrician", 
      experience: "10 years",
      rating: 4.9,
      patients: 3200,
      fee: "৳1,000",
      hospital: "Apollo Hospital",
      available: "Today, 5:00 PM"
    },
    { 
      name: "Dr. Imran Hossain", 
      specialty: "Orthopedic", 
      experience: "18 years",
      rating: 4.7,
      patients: 2100,
      fee: "৳1,800",
      hospital: "United Hospital",
      available: "Tomorrow, 2:00 PM"
    },
  ];

  const specialties = [
    "Cardiology", "Neurology", "Pediatrics", "Orthopedics", 
    "Dermatology", "Gynecology", "Gastroenterology", "Psychiatry"
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-emerald-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-emerald-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-white">Doctors</h1>
            <p className="text-emerald-100 text-sm">Find & Consult Specialists</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Service Types */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-emerald-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-sm text-gray-900">Book Appointment</h3>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-sm text-gray-900">Online Consultation</h3>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-red-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-sm text-gray-900">Emergency Telemedicine</h3>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="bg-purple-100 p-3 rounded-xl w-fit mx-auto mb-2">
                  <Home className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-sm text-gray-900">Home Consultation</h3>
              </CardContent>
            </Card>
          </div>

          {/* Specialties */}
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1.5 cursor-pointer hover:bg-emerald-50">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Available Doctors */}
          <div>
            <h2 className="text-gray-900 mb-4">Available Doctors</h2>
            <div className="space-y-4">
              {doctors.map((doctor, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-gray-900">{doctor.name}</h3>
                            <p className="text-sm text-emerald-600">{doctor.specialty}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{doctor.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span>{doctor.experience} exp</span>
                          <span>•</span>
                          <span>{doctor.patients}+ patients</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                          <MapPin className="h-3 w-3" />
                          <span className="line-clamp-1">{doctor.hospital}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3 text-emerald-600" />
                            <span className="text-xs text-gray-600">{doctor.available}</span>
                          </div>
                          <span className="text-emerald-600">{doctor.fee}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-3">
                          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                            Book Now
                          </Button>
                          <Button size="sm" variant="outline">
                            View Profile
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
