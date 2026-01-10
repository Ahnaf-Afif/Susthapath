import { useState } from "react";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { HomePage } from "./components/HomePage";
import { MedicalEducationPage } from "./components/MedicalEducationPage";
import { DoctorsPage } from "./components/DoctorsPage";
import { MedicinePage } from "./components/MedicinePage";
import { LogisticsPage } from "./components/LogisticsPage";
import { BookingPage } from "./components/BookingPage";
import { InsurancePage } from "./components/InsurancePage";
import { PatientProfilePage } from "./components/PatientProfilePage";
import { MedicineGroupsPage } from "./components/MedicineGroupsPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [currentService, setCurrentService] = useState<string | null>(null);

  const handleServiceClick = (service: string) => {
    setCurrentService(service);
  };

  const handleBackToHome = () => {
    setCurrentService(null);
    setActiveTab("home");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentService(null);
  };

  const renderContent = () => {
    // Show service pages when a service is selected
    if (currentService) {
      switch (currentService) {
        case "education":
          return <MedicalEducationPage onBack={handleBackToHome} />;
        case "doctors":
          return <DoctorsPage onBack={handleBackToHome} />;
        case "medicine":
          return <MedicinePage onBack={handleBackToHome} />;
        case "medicine-groups":
          return <MedicineGroupsPage onBack={handleBackToHome} />;
        case "logistics":
          return <LogisticsPage onBack={handleBackToHome} />;
        case "booking":
          return <BookingPage onBack={handleBackToHome} />;
        case "insurance":
          return <InsurancePage onBack={handleBackToHome} />;
        default:
          return <HomePage onServiceClick={handleServiceClick} />;
      }
    }

    // Show tab-based pages
    switch (activeTab) {
      case "home":
        return <HomePage onServiceClick={handleServiceClick} />;
      case "profile":
        return <PatientProfilePage onBack={handleBackToHome} />;
      case "appointments":
        return (
          <div className="p-4 pb-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-gray-900 mb-4">My Appointments</h1>
              <p className="text-gray-500">Your upcoming appointments will appear here.</p>
            </div>
          </div>
        );
      case "services":
        return <HomePage onServiceClick={handleServiceClick} />;
      case "records":
        return (
          <div className="p-4 pb-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-gray-900 mb-4">Medical Records</h1>
              <p className="text-gray-500">Your medical records and documents will appear here.</p>
            </div>
          </div>
        );
      default:
        return <HomePage onServiceClick={handleServiceClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!currentService && <Header onProfileClick={() => setActiveTab("profile")} />}
      <main className="min-h-screen">
        {renderContent()}
      </main>
      {!currentService && <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
}