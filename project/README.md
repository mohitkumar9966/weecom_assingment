# Product Dashboard

A modern, responsive product management dashboard built with React, TailwindCSS, and shadcn/ui. Features full CRUD operations, real-time search, pagination, and category filtering using the DummyJSON API.

## 🚀 Features

- **Modern Dashboard Layout**: Clean sidebar navigation with responsive mobile support
- **Product Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Advanced Filtering**: Real-time search and category-based filtering
- **Pagination**: Efficient data loading with next/previous navigation
- **Loading States**: Skeleton placeholders and proper error handling
- **React Query Integration**: Optimized data fetching with caching and mutations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **TanStack Query** - Powerful data synchronization
- **Vite** - Fast build tool and dev server
- **DummyJSON API** - Mock REST API for products

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Top navigation bar
│   │   └── Sidebar.tsx         # Side navigation menu
│   ├── ui/                     # shadcn/ui components
│   ├── DashboardHeader.tsx     # Page header with filters
│   ├── ProductDialog.tsx       # Add/Edit product modal
│   └── ProductTable.tsx        # Main products table
├── hooks/
│   └── useProducts.ts          # React Query hooks
├── lib/
│   ├── api.ts                  # API service functions
│   └── utils.ts                # Utility functions
├── pages/
│   └── Dashboard.tsx           # Main dashboard page
└── main.tsx                    # App entry point
```

## 🎨 Design Philosophy

The dashboard follows modern design principles with a focus on usability and visual hierarchy:

- **Purple Color Scheme**: Deep purple (#7C3AED) primary with emerald and amber accents
- **Clean Typography**: Inter font family with proper spacing and contrast
- **Micro-interactions**: Subtle hover effects and smooth transitions
- **Visual Feedback**: Loading states, success/error messages, and confirmation dialogs
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## 🔧 Key Features Explained

### Data Management
- **React Query** handles all API calls with intelligent caching
- Automatic refetching after mutations ensures data consistency
- Optimistic updates provide immediate user feedback

### Search & Filtering
- Debounced search prevents excessive API calls
- Category filtering with dynamic dropdown population
- Maintains filter state during pagination

### CRUD Operations
- **Add**: Modal form with validation and category selection
- **Edit**: Pre-filled form with existing product data
- **Delete**: Confirmation dialog to prevent accidental deletions
- **Read**: Paginated table with responsive design

### Error Handling
- Network error recovery with retry mechanisms
- User-friendly error messages via toast notifications
- Graceful handling of empty states and loading conditions

## 🌐 API Integration

The app integrates with the DummyJSON API endpoints:

- `GET /products` - Fetch products with pagination
- `GET /products/search` - Search products by query
- `GET /products/categories` - Fetch available categories
- `POST /products/add` - Add new product
- `PUT /products/{id}` - Update existing product
- `DELETE /products/{id}` - Delete product

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices with collapsible sidebar
- **Tablet Support**: Adaptive layout for medium screen sizes
- **Desktop**: Full-featured layout with permanent sidebar
- **Touch Friendly**: Appropriate button sizes and spacing for touch devices

## 🎯 Performance Optimizations

- **Code Splitting**: Lazy loading of components and routes
- **Image Optimization**: Fallback images and proper loading states
- **Bundle Optimization**: Tree shaking and minimal bundle size
- **Caching Strategy**: React Query manages intelligent cache invalidation

## 🚀 Deployment

The application is configured for deployment on modern hosting platforms:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

Recommended platforms: Vercel, Netlify, or GitHub Pages.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.