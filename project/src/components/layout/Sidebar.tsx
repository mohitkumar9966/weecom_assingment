import { useState } from 'react';
import { Package, Menu, X, ShoppingCart, BarChart3, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Products');

  const menuItems = [
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: Settings, label: 'Settings' },
  ];

  const handleMenuClick = (label: string) => {
    setActiveItem(label);
    setIsOpen(false); // Close mobile menu
    
    if (label !== 'Products') {
      toast({
        title: `${label} Section`,
        description: `${label} functionality coming soon!`,
      });
    }
  };
  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 transform bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center px-6 border-b border-gray-200">
            <Package className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">StoreDash</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleMenuClick(item.label)}
                    className={cn(
                      'w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200',
                      activeItem === item.label
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-medium text-purple-700">MK</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Mohit kumar</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
