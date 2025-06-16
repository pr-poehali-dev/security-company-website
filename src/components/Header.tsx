import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-xl font-bold text-primary">Защита</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              О нас
            </Link>
            <Link
              to="/contacts"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contacts") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Контакты
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} />
                <span>+7 482 336-42-73</span>
              </div>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Заказать охрану
              </Button>
            </div>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/services")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link
                to="/contacts"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/contacts")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button size="sm" className="mx-3 bg-accent hover:bg-accent/90">
                Заказать охрану
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
