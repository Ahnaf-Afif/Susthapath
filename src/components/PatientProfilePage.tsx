import { ArrowLeft, User, Calendar, FileText, Heart, Activity, Pill, Download, Edit } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface PatientProfilePageProps {
  onBack: () => void;
}

export function PatientProfilePage({ onBack }: PatientProfilePageProps) {
  const patientInfo = {
    name: "Mohammad Rahman",
    age: 45,
    gender: "Male",
    bloodGroup: "B+",
    phone: "+880 1712-345678",
    email: "rahman@example.com",
    address: "House 23, Road 5, Dhanmondi, Dhaka"
  };

  const medicalHistory = [
    { date: "Dec 15, 2024", condition: "Hypertension", doctor: "Dr. Fatima Rahman", hospital: "Square Hospital" },
    { date: "Nov 20, 2024", condition: "Diabetes Type 2", doctor: "Dr. Kamal Ahmed", hospital: "United Hospital" },
    { date: "Oct 10, 2024", condition: "Regular Checkup", doctor: "Dr. Nasrin Akter", hospital: "Apollo Hospital" },
  ];

  const prescriptions = [
    { date: "Dec 20, 2024", doctor: "Dr. Fatima Rahman", medicines: 3, status: "Active" },
    { date: "Nov 25, 2024", doctor: "Dr. Kamal Ahmed", medicines: 4, status: "Completed" },
    { date: "Oct 15, 2024", doctor: "Dr. Nasrin Akter", medicines: 2, status: "Completed" },
  ];

  const vitalSigns = [
    { label: "Blood Pressure", value: "120/80 mmHg", status: "normal", icon: Activity },
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: Heart },
    { label: "Blood Sugar", value: "110 mg/dL", status: "normal", icon: Activity },
    { label: "Weight", value: "75 kg", status: "normal", icon: User },
  ];

  const appointments = [
    { date: "Jan 5, 2025", doctor: "Dr. Fatima Rahman", type: "Follow-up", status: "Upcoming" },
    { date: "Dec 20, 2024", doctor: "Dr. Kamal Ahmed", type: "Consultation", status: "Completed" },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-emerald-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-emerald-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-white">Patient Profile</h1>
            <p className="text-emerald-100 text-sm">Your medical information</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-emerald-600">
            <Edit className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-6">
          {/* Profile Card */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-2xl">
                    {patientInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-gray-900 mb-1">{patientInfo.name}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{patientInfo.age} years</Badge>
                    <Badge variant="outline">{patientInfo.gender}</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                      {patientInfo.bloodGroup}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">{patientInfo.phone}</p>
                  <p className="text-sm text-gray-500">{patientInfo.email}</p>
                </div>
              </div>
              <Separator className="mb-4" />
              <div>
                <p className="text-sm text-gray-600">Address:</p>
                <p className="text-sm text-gray-900">{patientInfo.address}</p>
              </div>
            </CardContent>
          </Card>

          {/* Vital Signs */}
          <div>
            <h2 className="text-gray-900 mb-4">Vital Signs</h2>
            <div className="grid grid-cols-2 gap-3">
              {vitalSigns.map((vital, index) => {
                const Icon = vital.icon;
                return (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <Icon className="h-4 w-4 text-emerald-600" />
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                          {vital.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{vital.label}</p>
                      <p className="text-sm text-gray-900">{vital.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Appointments</h2>
              <Button variant="ghost" size="sm" className="text-emerald-600">
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {appointments.map((appointment, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-sm text-gray-900">{appointment.doctor}</h3>
                            <p className="text-xs text-gray-500">{appointment.type}</p>
                          </div>
                          <Badge 
                            className={
                              appointment.status === "Upcoming" 
                                ? "bg-blue-100 text-blue-700 hover:bg-blue-100" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{appointment.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Medical History */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Medical History</h2>
              <Button variant="ghost" size="sm" className="text-emerald-600">
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {medicalHistory.map((record, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-sm text-gray-900 mb-1">{record.condition}</h3>
                        <p className="text-xs text-gray-500">{record.doctor}</p>
                        <p className="text-xs text-gray-400">{record.hospital}</p>
                      </div>
                      <span className="text-xs text-gray-500">{record.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Prescriptions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Prescriptions</h2>
              <Button variant="ghost" size="sm" className="text-emerald-600">
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {prescriptions.map((prescription, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <Pill className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-sm text-gray-900">{prescription.doctor}</h3>
                            <p className="text-xs text-gray-500">{prescription.medicines} medicines</p>
                          </div>
                          <Badge 
                            className={
                              prescription.status === "Active" 
                                ? "bg-green-100 text-green-700 hover:bg-green-100" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                            }
                          >
                            {prescription.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{prescription.date}</span>
                          <Button size="sm" variant="outline" className="h-7">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Medical Records Action */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600">
            <CardContent className="p-5 text-center">
              <FileText className="h-12 w-12 text-white mx-auto mb-2 opacity-90" />
              <h3 className="text-white mb-1">Complete Medical Records</h3>
              <p className="text-emerald-50 text-sm mb-3">
                Download all your medical records in one file
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Download className="h-4 w-4 mr-2" />
                Download Records
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
