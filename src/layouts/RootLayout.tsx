import React from 'react';
import { Outlet } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary-brown">PawFume</span>
            </a>
          </div>
          
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            <a href="/products" className="text-sm font-medium transition-colors hover:text-primary-brown">
              Products
            </a>
            <a href="/install" className="text-sm font-medium transition-colors hover:text-primary-brown">
              Install App
            </a>
          </nav>
          
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-white">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary-brown">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary-brown">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary-brown">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-primary-brown">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;