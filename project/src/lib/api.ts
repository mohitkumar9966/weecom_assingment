const BASE_URL = 'https://dummyjson.com';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductInput {
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

// Fetch products with pagination and search
export const fetchProducts = async (
  limit = 10,
  skip = 0,
  search = '',
  category = ''
): Promise<ProductsResponse> => {
  let url = `${BASE_URL}/products`;
  
  if (search) {
    url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}`;
  } else if (category && category !== 'all') {
    url = `${BASE_URL}/products/category/${encodeURIComponent(category)}`;
  }
  
  const params = new URLSearchParams({
    limit: limit.toString(),
    skip: skip.toString(),
    delay: '800' // Artificial delay to show loading states
  });
  
  const response = await fetch(`${url}?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
};

// Fetch categories
export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

// Add product
export const addProduct = async (product: ProductInput): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add product');
  }
  
  return response.json();
};

// Update product
export const updateProduct = async (id: number, product: Partial<ProductInput>): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update product');
  }
  
  return response.json();
};

// Delete product
export const deleteProduct = async (id: number): Promise<{ id: number; isDeleted: boolean }> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete product');
  }
  
  return response.json();
};