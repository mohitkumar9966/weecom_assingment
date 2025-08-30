import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { DashboardHeader } from '@/components/DashboardHeader';
import { ProductTable } from '@/components/ProductTable';

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-64">
        <Header searchValue={searchQuery} onSearchChange={setSearchQuery} />
        <main className="p-6">
          <DashboardHeader
            category={category}
            onCategoryChange={setCategory}
          />
          <ProductTable
            searchQuery={searchQuery}
            category={category}
          />
        </main>
      </div>
    </div>
  );
}