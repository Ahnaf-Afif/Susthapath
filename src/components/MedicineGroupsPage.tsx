import { ArrowLeft, Pill, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface MedicineGroupsPageProps {
  onBack: () => void;
}

interface Medicine {
  name: string;
  genericName: string;
  strength: string;
  price: string;
  description: string;
  manufacturer: string;
  sideEffects: string;
}

interface MedicineGroup {
  groupName: string;
  description: string;
  color: string;
  gradient: string;
  medicines: Medicine[];
}

export function MedicineGroupsPage({ onBack }: MedicineGroupsPageProps) {
  const [expandedMedicine, setExpandedMedicine] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

  const medicineGroups: MedicineGroup[] = [
    {
      groupName: "Analgesics (Pain Relief)",
      description: "Medicines used to relieve pain and reduce fever",
      color: "bg-blue-500",
      gradient: "from-blue-400 to-blue-600",
      medicines: [
        {
          name: "Napa",
          genericName: "Paracetamol",
          strength: "500mg",
          price: "৳2.50",
          description: "Commonly used for mild to moderate pain relief and fever reduction. Safe for most people when used as directed.",
          manufacturer: "Beximco Pharmaceuticals",
          sideEffects: "Rarely causes side effects at recommended doses. Overdose can cause liver damage."
        },
        {
          name: "Ace Plus",
          genericName: "Paracetamol + Caffeine",
          strength: "500mg + 65mg",
          price: "৳4.00",
          description: "Enhanced pain relief formula with caffeine for faster action. Effective for headaches and muscle pain.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "May cause sleeplessness due to caffeine. Avoid before bedtime."
        },
        {
          name: "Flexi",
          genericName: "Naproxen",
          strength: "250mg",
          price: "৳6.00",
          description: "NSAID for moderate pain, inflammation, and fever. Longer-lasting relief than paracetamol.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "May cause stomach upset, nausea. Take with food."
        }
      ]
    },
    {
      groupName: "Antibiotics",
      description: "Used to treat bacterial infections",
      color: "bg-red-500",
      gradient: "from-red-400 to-red-600",
      medicines: [
        {
          name: "Monas",
          genericName: "Amoxicillin",
          strength: "500mg",
          price: "৳8.00",
          description: "Broad-spectrum antibiotic for respiratory, urinary, and skin infections. Complete full course as prescribed.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "May cause diarrhea, nausea, skin rash. Stop if allergic reaction occurs."
        },
        {
          name: "Zimax",
          genericName: "Azithromycin",
          strength: "500mg",
          price: "৳15.00",
          description: "Effective against respiratory infections, throat infections, and some STDs. Usually 3-5 day course.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Stomach pain, diarrhea, nausea. Take on empty stomach for best absorption."
        },
        {
          name: "Ceftacid",
          genericName: "Cefixime",
          strength: "200mg",
          price: "৳18.00",
          description: "Third-generation cephalosporin for typhoid, urinary tract, and respiratory infections.",
          manufacturer: "Incepta Pharmaceuticals",
          sideEffects: "Diarrhea, nausea, abdominal pain. Report severe diarrhea to doctor."
        }
      ]
    },
    {
      groupName: "Antacids & Anti-ulcer",
      description: "For gastric problems, acidity, and ulcers",
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      medicines: [
        {
          name: "Seclo",
          genericName: "Omeprazole",
          strength: "20mg",
          price: "৳8.00",
          description: "Proton pump inhibitor that reduces stomach acid production. Used for GERD, ulcers, and gastritis.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Headache, diarrhea, nausea. Long-term use may affect vitamin B12 absorption."
        },
        {
          name: "Antacid",
          genericName: "Aluminum Hydroxide + Magnesium Hydroxide",
          strength: "400mg + 400mg",
          price: "৳3.00",
          description: "Fast-acting relief from heartburn, acid indigestion, and sour stomach.",
          manufacturer: "Healthcare Pharmaceuticals",
          sideEffects: "Constipation or diarrhea. Do not use if you have kidney problems."
        },
        {
          name: "Neoprazole",
          genericName: "Esomeprazole",
          strength: "40mg",
          price: "৳12.00",
          description: "Advanced PPI for severe acid reflux and Barrett's esophagus. Stronger than omeprazole.",
          manufacturer: "Incepta Pharmaceuticals",
          sideEffects: "Headache, dry mouth, drowsiness. Take before meals for best effect."
        }
      ]
    },
    {
      groupName: "Antidiabetic",
      description: "Medicines for diabetes management",
      color: "bg-purple-500",
      gradient: "from-purple-400 to-purple-600",
      medicines: [
        {
          name: "Glucomin",
          genericName: "Metformin",
          strength: "500mg",
          price: "৳3.50",
          description: "First-line treatment for Type 2 diabetes. Reduces glucose production in liver and improves insulin sensitivity.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Diarrhea, nausea, stomach upset. Take with meals to reduce side effects."
        },
        {
          name: "Gliben",
          genericName: "Glibenclamide",
          strength: "5mg",
          price: "৳2.00",
          description: "Sulfonylurea that stimulates insulin release from pancreas. Monitor blood sugar regularly.",
          manufacturer: "Beximco Pharmaceuticals",
          sideEffects: "May cause low blood sugar (hypoglycemia). Keep sugar/candy available."
        },
        {
          name: "Dibetix",
          genericName: "Sitagliptin",
          strength: "100mg",
          price: "৳35.00",
          description: "DPP-4 inhibitor for Type 2 diabetes. Works by increasing insulin when blood sugar is high.",
          manufacturer: "Incepta Pharmaceuticals",
          sideEffects: "Upper respiratory infection, headache, joint pain."
        }
      ]
    },
    {
      groupName: "Cardiovascular (Heart & BP)",
      description: "For heart conditions, blood pressure, and cholesterol",
      color: "bg-pink-500",
      gradient: "from-pink-400 to-pink-600",
      medicines: [
        {
          name: "Amodis",
          genericName: "Amlodipine",
          strength: "5mg",
          price: "৳6.50",
          description: "Calcium channel blocker for high blood pressure and angina. Relaxes blood vessels to improve blood flow.",
          manufacturer: "Incepta Pharmaceuticals",
          sideEffects: "Swelling in ankles/feet, dizziness, flushing. Rise slowly from sitting/lying position."
        },
        {
          name: "Ace",
          genericName: "Lisinopril",
          strength: "5mg",
          price: "৳12.00",
          description: "ACE inhibitor for hypertension and heart failure. Reduces strain on heart and blood vessels.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Dry cough, dizziness, headache. Do not use during pregnancy."
        },
        {
          name: "Atorva",
          genericName: "Atorvastatin",
          strength: "20mg",
          price: "৳10.00",
          description: "Statin for lowering cholesterol and preventing heart disease. Take at bedtime for best effect.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Muscle pain, joint pain, diarrhea. Report severe muscle pain immediately."
        }
      ]
    },
    {
      groupName: "Antihistamines (Allergy)",
      description: "For allergies, itching, and cold symptoms",
      color: "bg-orange-500",
      gradient: "from-orange-400 to-orange-600",
      medicines: [
        {
          name: "Histacin",
          genericName: "Cetirizine",
          strength: "10mg",
          price: "৳3.00",
          description: "Non-drowsy antihistamine for seasonal allergies, hives, and itching. Once daily dosing.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Mild drowsiness, dry mouth, headache. Avoid alcohol."
        },
        {
          name: "Fexo",
          genericName: "Fexofenadine",
          strength: "120mg",
          price: "৳8.00",
          description: "Non-sedating antihistamine for allergic rhinitis and chronic urticaria. Does not cause drowsiness.",
          manufacturer: "Incepta Pharmaceuticals",
          sideEffects: "Headache, nausea, drowsiness (rare). Safe for driving."
        },
        {
          name: "Alatrol",
          genericName: "Loratadine",
          strength: "10mg",
          price: "৳4.00",
          description: "24-hour relief from allergy symptoms. Non-drowsy formula for daytime use.",
          manufacturer: "Healthcare Pharmaceuticals",
          sideEffects: "Headache, drowsiness (rare), dry mouth."
        }
      ]
    },
    {
      groupName: "Respiratory",
      description: "For asthma, cough, and breathing problems",
      color: "bg-teal-500",
      gradient: "from-teal-400 to-teal-600",
      medicines: [
        {
          name: "Montel",
          genericName: "Montelukast",
          strength: "10mg",
          price: "৳12.00",
          description: "Leukotriene receptor antagonist for asthma and allergic rhinitis prevention. Take in evening.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Headache, stomach pain, fatigue. Report mood changes to doctor."
        },
        {
          name: "Salbutasol Inhaler",
          genericName: "Salbutamol",
          strength: "100mcg",
          price: "৳180.00",
          description: "Fast-acting bronchodilator for asthma and COPD. Provides quick relief during breathing difficulty.",
          manufacturer: "Beximco Pharmaceuticals",
          sideEffects: "Tremor, rapid heartbeat, nervousness. Do not exceed prescribed dose."
        },
        {
          name: "Cofsil",
          genericName: "Dextromethorphan",
          strength: "15mg",
          price: "৳5.00",
          description: "Cough suppressant for dry, irritating cough. Does not treat cause of cough.",
          manufacturer: "Healthcare Pharmaceuticals",
          sideEffects: "Drowsiness, dizziness, nausea. Avoid driving after taking."
        }
      ]
    },
    {
      groupName: "Vitamins & Supplements",
      description: "Essential vitamins and nutritional supplements",
      color: "bg-yellow-500",
      gradient: "from-amber-400 to-yellow-600",
      medicines: [
        {
          name: "Vitacal-D",
          genericName: "Calcium + Vitamin D3",
          strength: "500mg + 200IU",
          price: "৳7.00",
          description: "Supports bone health, prevents osteoporosis, and maintains calcium levels. Important for elderly.",
          manufacturer: "Square Pharmaceuticals",
          sideEffects: "Constipation, gas, upset stomach. Take with food."
        },
        {
          name: "B-Complex",
          genericName: "Vitamin B Complex",
          strength: "Various",
          price: "৳4.00",
          description: "Essential B vitamins for energy production, nervous system, and metabolism. Good for stress.",
          manufacturer: "Renata Limited",
          sideEffects: "Rarely causes nausea. May turn urine bright yellow (harmless)."
        },
        {
          name: "Ferrous",
          genericName: "Ferrous Sulfate",
          strength: "200mg",
          price: "৳3.00",
          description: "Iron supplement for anemia and iron deficiency. Take on empty stomach with vitamin C.",
          manufacturer: "Healthcare Pharmaceuticals",
          sideEffects: "Constipation, dark stools, stomach upset. Normal side effects."
        }
      ]
    }
  ];

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header with Glass Effect */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 backdrop-blur-2xl bg-white/40 border-b border-white/20 shadow-lg"
      >
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onBack} 
                className="text-indigo-600 hover:bg-white/60 rounded-full backdrop-blur-xl"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            <div>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-gray-900"
              >
                Medicine Groups
              </motion.h1>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-indigo-600 text-sm"
              >
                Browse by category
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Info Banner with Glass Effect */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Card className="border-0 shadow-2xl mb-6 bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
              <CardContent className="p-4 relative z-10">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Info className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  </motion.div>
                  <div>
                    <h3 className="text-white text-sm mb-1">Important Information</h3>
                    <p className="text-white/90 text-xs">
                      Always consult a doctor before taking any medication. Follow prescribed dosages.
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Medicine Groups */}
          <div className="space-y-4">
            {medicineGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: groupIndex * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden backdrop-blur-2xl bg-white/60 hover:bg-white/80 transition-all duration-300">
                  <motion.div
                    className="w-full p-4 cursor-pointer"
                    onClick={() => setExpandedGroup(expandedGroup === groupIndex ? null : groupIndex)}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`bg-gradient-to-br ${group.gradient} p-3 rounded-2xl shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <Pill className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1 text-left">
                        <h3 className="text-gray-900">{group.groupName}</h3>
                        <p className="text-sm text-gray-600">{group.description}</p>
                        <Badge variant="outline" className="mt-2 backdrop-blur-xl bg-white/60 border-white/40">
                          {group.medicines.length} medicines
                        </Badge>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedGroup === groupIndex ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {expandedGroup === groupIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      >
                        <div className="px-4 pb-4 space-y-3">
                          {group.medicines.map((medicine, medIndex) => {
                            const isExpanded = expandedMedicine === `${groupIndex}-${medIndex}`;
                            return (
                              <motion.div
                                key={medIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: medIndex * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <Card className="border border-white/40 shadow-lg backdrop-blur-xl bg-white/70 hover:bg-white/90 transition-all duration-300 overflow-hidden">
                                  <CardContent className="p-4">
                                    <div className="flex items-start justify-between mb-2">
                                      <div>
                                        <motion.h4 
                                          className="text-gray-900"
                                          whileHover={{ x: 5 }}
                                          transition={{ type: "spring", stiffness: 300 }}
                                        >
                                          {medicine.name}
                                        </motion.h4>
                                        <p className="text-sm text-gray-600">{medicine.genericName}</p>
                                        <Badge variant="outline" className="mt-1 text-xs backdrop-blur-xl bg-gradient-to-r from-white/80 to-white/60 border-white/40">
                                          {medicine.strength}
                                        </Badge>
                                      </div>
                                      <motion.span 
                                        className="text-indigo-600"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                      >
                                        {medicine.price}
                                      </motion.span>
                                    </div>
                                    
                                    <p className="text-sm text-gray-700 mb-3">{medicine.description}</p>
                                    
                                    <motion.div whileTap={{ scale: 0.98 }}>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setExpandedMedicine(isExpanded ? null : `${groupIndex}-${medIndex}`)}
                                        className="w-full justify-between p-2 h-auto backdrop-blur-xl bg-white/50 hover:bg-white/80 rounded-xl"
                                      >
                                        <span className="text-xs">
                                          {isExpanded ? "Hide Details" : "View Full Details"}
                                        </span>
                                        <motion.div
                                          animate={{ rotate: isExpanded ? 180 : 0 }}
                                          transition={{ type: "spring", stiffness: 200 }}
                                        >
                                          {isExpanded ? (
                                            <ChevronUp className="h-4 w-4" />
                                          ) : (
                                            <ChevronDown className="h-4 w-4" />
                                          )}
                                        </motion.div>
                                      </Button>
                                    </motion.div>

                                    <AnimatePresence>
                                      {isExpanded && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="mt-3 pt-3 border-t border-white/40 space-y-2">
                                            <motion.div
                                              initial={{ x: -10, opacity: 0 }}
                                              animate={{ x: 0, opacity: 1 }}
                                              transition={{ delay: 0.1 }}
                                            >
                                              <p className="text-xs text-gray-500 mb-1">Manufacturer</p>
                                              <p className="text-sm text-gray-900">{medicine.manufacturer}</p>
                                            </motion.div>
                                            <motion.div
                                              initial={{ x: -10, opacity: 0 }}
                                              animate={{ x: 0, opacity: 1 }}
                                              transition={{ delay: 0.2 }}
                                            >
                                              <p className="text-xs text-gray-500 mb-1">Side Effects</p>
                                              <p className="text-sm text-gray-700">{medicine.sideEffects}</p>
                                            </motion.div>
                                            <motion.div 
                                              className="flex gap-2 mt-3"
                                              initial={{ y: 10, opacity: 0 }}
                                              animate={{ y: 0, opacity: 1 }}
                                              transition={{ delay: 0.3 }}
                                            >
                                              <motion.div 
                                                className="flex-1"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                              >
                                                <Button size="sm" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg">
                                                  Add to Cart
                                                </Button>
                                              </motion.div>
                                              <motion.div 
                                                className="flex-1"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                              >
                                                <Button size="sm" variant="outline" className="w-full backdrop-blur-xl bg-white/60 hover:bg-white/90 border-white/40">
                                                  More Info
                                                </Button>
                                              </motion.div>
                                            </motion.div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}