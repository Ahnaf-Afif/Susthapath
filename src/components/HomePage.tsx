import { useState } from "react";
import { 
  BookOpen, 
  Stethoscope, 
  Pill, 
  Ambulance, 
  ClipboardList, 
  Shield,
  GraduationCap,
  HeartPulse,
  Truck,
  Heart,
  Calendar,
  Video,
  Phone,
  Home,
  TestTube,
  FlaskConical,
  Users,
  Library,
  Bone,
  ShoppingBag,
  Siren,
  Bed,
  Activity,
  FileText
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface HomePageProps {
  onServiceClick: (service: string) => void;
}

export function HomePage({ onServiceClick }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Three major categories
  const categories = [
    {
      id: "academia",
      name: "ACADEMIA",
      icon: GraduationCap,
      gradient: "from-blue-400 to-blue-600",
      description: "Educational Resources"
    },
    {
      id: "care-hub",
      name: "CARE HUB",
      icon: HeartPulse,
      gradient: "from-emerald-400 to-emerald-600",
      description: "Medical Care Services"
    },
    {
      id: "logistic-support",
      name: "LOGISTIC SUPPORT",
      icon: Truck,
      gradient: "from-orange-400 to-orange-600",
      description: "Support Services"
    }
  ];

  // Quick actions for each category
  const quickActionsByCategory = {
    academia: [
      { icon: BookOpen, label: "Medical Books", gradient: "from-blue-400 to-blue-600", action: "education" },
      { icon: Bone, label: "Skeleton Models", gradient: "from-cyan-400 to-cyan-600", action: "education" },
      { icon: ShoppingBag, label: "Accessories", gradient: "from-indigo-400 to-indigo-600", action: "education" },
      { icon: Library, label: "Study Guides", gradient: "from-violet-400 to-violet-600", action: "education" },
    ],
    "care-hub": [
      { icon: Calendar, label: "Book Appointment", gradient: "from-emerald-400 to-emerald-600", action: "doctors" },
      { icon: Video, label: "Online Consultation", gradient: "from-teal-400 to-teal-600", action: "doctors" },
      { icon: Phone, label: "Emergency Call", gradient: "from-red-400 to-red-600", action: "logistics" },
      { icon: Home, label: "Home Visit", gradient: "from-green-400 to-green-600", action: "doctors" },
      { icon: Pill, label: "Medicine Groups", gradient: "from-purple-400 to-purple-600", action: "medicine-groups" },
      { icon: ShoppingBag, label: "Buy Medicine", gradient: "from-pink-400 to-pink-600", action: "medicine" },
    ],
    "logistic-support": [
      { icon: Ambulance, label: "Ambulance", gradient: "from-red-400 to-red-600", action: "logistics" },
      { icon: TestTube, label: "Home Lab Tests", gradient: "from-purple-400 to-purple-600", action: "logistics" },
      { icon: Users, label: "Care Services", gradient: "from-blue-400 to-blue-600", action: "logistics" },
      { icon: Bed, label: "Hospital Beds", gradient: "from-orange-400 to-orange-600", action: "booking" },
      { icon: Activity, label: "ICU/HDU/CCU", gradient: "from-rose-400 to-rose-600", action: "booking" },
      { icon: FlaskConical, label: "MRI/CT Scan", gradient: "from-cyan-400 to-cyan-600", action: "booking" },
    ]
  };

  // Services mapped to categories
  const mainServices = [
    { 
      icon: BookOpen, 
      title: "Medical Education", 
      description: "Books, Skeleton, Accessories & Study Guides",
      gradient: "from-blue-400 to-blue-600",
      service: "education",
      category: "academia"
    },
    { 
      icon: Stethoscope, 
      title: "Doctors", 
      description: "Appointments, Online & Home Consultations",
      gradient: "from-emerald-400 to-emerald-600",
      service: "doctors",
      category: "care-hub"
    },
    { 
      icon: Pill, 
      title: "Medicine & Equipment", 
      description: "Medicine info, Selling & Medical Equipment",
      gradient: "from-purple-400 to-purple-600",
      service: "medicine",
      category: "care-hub"
    },
    { 
      icon: Ambulance, 
      title: "Medical Logistics", 
      description: "Ambulance, Tests & Care Services",
      gradient: "from-red-400 to-red-600",
      service: "logistics",
      category: "logistic-support"
    },
    { 
      icon: ClipboardList, 
      title: "Booking & Information", 
      description: "Hospital Seats, ICU, MRI & CT-scan Booking",
      gradient: "from-orange-400 to-orange-600",
      service: "booking",
      category: "logistic-support"
    },
    { 
      icon: Shield, 
      title: "Medical Insurance", 
      description: "Comprehensive health insurance plans",
      gradient: "from-indigo-400 to-indigo-600",
      service: "insurance",
      category: "care-hub"
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null); // Deselect if clicking the same category
    } else {
      setSelectedCategory(categoryId);
    }
  };

  // Filter services based on selected category
  const displayedServices = selectedCategory
    ? mainServices.filter(service => service.category === selectedCategory)
    : mainServices;

  // Get quick actions for selected category
  const currentQuickActions = selectedCategory 
    ? quickActionsByCategory[selectedCategory as keyof typeof quickActionsByCategory] || []
    : [];

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 pt-6 pb-8 rounded-b-3xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
        <div className="max-w-md mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white mb-2"
          >
            Welcome to Shusthopath
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-emerald-50 text-sm mb-6"
          >
            Your complete healthcare solution in one place
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/90 backdrop-blur-xl rounded-xl px-4 py-3 flex items-center gap-2 shadow-2xl border border-white/20"
          >
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search doctors, medicines, services..." 
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Three Major Categories */}
      <div className="px-4 -mt-4 mb-4">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <motion.button 
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-2 border-2 ${
                    isSelected 
                      ? 'bg-white border-emerald-500 shadow-emerald-200' 
                      : 'bg-white/80 border-white/20'
                  }`}
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${category.gradient} p-3 rounded-xl shadow-lg`}
                    animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                    transition={isSelected ? { duration: 0.6, repeat: Infinity, repeatDelay: 0.5 } : {}}
                    whileHover={{ rotate: 360 }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-center">
                    <span className={`text-xs font-semibold leading-tight block ${
                      isSelected ? 'text-emerald-600' : 'text-gray-700'
                    }`}>
                      {category.name}
                    </span>
                    <span className="text-[10px] text-gray-500 leading-tight block mt-0.5">
                      {category.description}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions - Appears when category is selected */}
      <AnimatePresence>
        {selectedCategory && currentQuickActions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="px-4 mb-6 overflow-hidden"
          >
            <div className="max-w-md mx-auto">
              <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/40"
              >
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
                <div className={`grid gap-3 ${
                  currentQuickActions.length <= 4 ? 'grid-cols-4' : 'grid-cols-3'
                }`}>
                  {currentQuickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => onServiceClick(action.action)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/80 backdrop-blur-xl rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-2 border border-white/40"
                      >
                        <motion.div
                          className={`bg-gradient-to-br ${action.gradient} p-2 rounded-lg shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </motion.div>
                        <span className="text-[10px] text-gray-700 text-center leading-tight font-medium">
                          {action.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Banner */}
      <div className="px-4 mb-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-xl relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
              <CardContent className="p-0 relative z-10">
                <div className="flex items-center justify-between p-5">
                  <div className="flex-1">
                    <motion.h3 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="text-white mb-1"
                    >
                      24/7 Emergency Care
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      className="text-blue-50 text-sm mb-3"
                    >
                      Connect with doctors anytime
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="sm" 
                        className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                        onClick={() => onServiceClick("logistics")}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="h-16 w-16 text-white opacity-20" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Main Services */}
      <div className="px-4">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="flex items-center justify-between mb-4"
          >
            <h2 className="text-gray-900">Our Services</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-emerald-600 hover:bg-emerald-50"
                onClick={() => setSelectedCategory(null)}
              >
                {selectedCategory ? "Show All" : "View All"}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service, index) => {
                const ServiceIcon = service.icon;
                const isHighlighted = selectedCategory === service.category;
                return (
                  <motion.div
                    key={service.service}
                    layout
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`border-0 shadow-xl backdrop-blur-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                        isHighlighted 
                          ? 'bg-white ring-2 ring-emerald-400 shadow-emerald-200' 
                          : 'bg-white/70 hover:bg-white/90'
                      }`}
                      onClick={() => onServiceClick(service.service)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`bg-gradient-to-br ${service.gradient} p-3 rounded-xl shadow-lg`}
                            animate={isHighlighted ? { scale: [1, 1.1, 1] } : {}}
                            transition={isHighlighted ? { duration: 0.8, repeat: Infinity, repeatDelay: 0.3 } : {}}
                            whileHover={{ rotate: 360 }}
                          >
                            <ServiceIcon className="h-6 w-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className={`mb-1 ${isHighlighted ? 'text-emerald-600' : 'text-gray-900'}`}>
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                          <motion.svg 
                            className={`h-5 w-5 ${isHighlighted ? 'text-emerald-500' : 'text-gray-400'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ x: 0 }}
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Health Tips Section */}
      <div className="px-4 mt-8 mb-6">
        <div className="max-w-md mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            className="text-gray-900 mb-4"
          >
            Health Tips
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 backdrop-blur-xl rounded-2xl p-4 border border-emerald-200/50 shadow-lg"
          >
            <div className="flex gap-3">
              <motion.div 
                className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-xl h-fit shadow-lg"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.9 }}
                  className="text-gray-900 mb-1"
                >
                  Stay Hydrated
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 2 }}
                  className="text-sm text-gray-600"
                >
                  Drink at least 8 glasses of water daily for better health and wellness.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
