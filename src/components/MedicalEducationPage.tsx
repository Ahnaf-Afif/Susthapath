import { ArrowLeft, BookOpen, Bone, ShoppingBag, FileText, Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface MedicalEducationPageProps {
  onBack: () => void;
}

export function MedicalEducationPage({ onBack }: MedicalEducationPageProps) {
  const books = [
    { title: "Gray's Anatomy", author: "Henry Gray", price: "৳2,500", rating: 4.8, image: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
    { title: "Guyton Physiology", author: "John E. Hall", price: "৳1,800", rating: 4.7, image: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
    { title: "Robbins Pathology", author: "Vinay Kumar", price: "৳2,200", rating: 4.9, image: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
    { title: "Harrison's Medicine", author: "J. Larry Jameson", price: "৳3,000", rating: 4.8, image: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  ];

  const skeletons = [
    { title: "Full Human Skeleton", price: "৳15,000", type: "Full Body", stock: "In Stock" },
    { title: "Skull Model", price: "৳3,500", type: "Partial", stock: "In Stock" },
    { title: "Spine Model", price: "৳4,200", type: "Partial", stock: "Limited" },
    { title: "Joint Model Set", price: "৳6,500", type: "Set", stock: "In Stock" },
  ];

  const accessories = [
    { title: "Stethoscope Premium", price: "৳2,800", brand: "Littmann" },
    { title: "Lab Coat White", price: "৳1,200", brand: "MedPro" },
    { title: "Medical Scissors", price: "৳450", brand: "Surgical Steel" },
    { title: "BP Monitor", price: "৳3,500", brand: "Omron" },
  ];

  const guides = [
    { title: "MBBS First Year Notes", author: "Dr. Rahman", pages: "250 pages", price: "৳500" },
    { title: "Surgery Quick Guide", author: "Dr. Karim", pages: "180 pages", price: "৳450" },
    { title: "Pharmacology Notes", author: "Dr. Ahmed", pages: "300 pages", price: "৳600" },
    { title: "Clinical Examination", author: "Dr. Hasan", pages: "200 pages", price: "৳550" },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-blue-500 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-blue-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-white">Medical Education</h1>
            <p className="text-blue-100 text-sm">Books, Skeleton & Study Materials</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="skeleton">Skeleton</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
            </TabsList>

            {/* Books Tab */}
            <TabsContent value="books" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {books.map((book, index) => (
                  <Card key={index} className="border-0 shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-blue-400" />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm mb-1 line-clamp-1">{book.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600">{book.price}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{book.rating}</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full mt-2 bg-blue-500 hover:bg-blue-600">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skeleton Tab */}
            <TabsContent value="skeleton" className="space-y-3">
              {skeletons.map((item, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Bone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-gray-900">{item.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {item.stock}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{item.type}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600">{item.price}</span>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Order Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Accessories Tab */}
            <TabsContent value="accessories" className="space-y-3">
              {accessories.map((item, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <ShoppingBag className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600">{item.price}</span>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Guides Tab */}
            <TabsContent value="guides" className="space-y-3">
              {guides.map((guide, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-100 p-3 rounded-xl">
                        <FileText className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">{guide.title}</h3>
                        <p className="text-sm text-gray-500 mb-1">By {guide.author}</p>
                        <p className="text-xs text-gray-400 mb-2">{guide.pages}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600">{guide.price}</span>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
