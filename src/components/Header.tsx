import { Bell, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeaderProps {
  onMenuClick?: () => void;
  onProfileClick?: () => void;
}

export function Header({ onMenuClick, onProfileClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <Menu className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-emerald-600">Shusthopath</h1>
            <p className="text-xs text-gray-500">Your Health Partner</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          <Avatar className="h-9 w-9 cursor-pointer" onClick={onProfileClick}>
            <AvatarImage src="" />
            <AvatarFallback className="bg-emerald-100 text-emerald-700">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
