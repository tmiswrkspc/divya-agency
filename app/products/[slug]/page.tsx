import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { getProductBySlug, getAllProductSlugs, products } from '@/lib/products';
import ProductCard from '@/components/product-card';

// Dynamically import the client component
const ProductDetailsClient = dynamic(() => import('@/components/product-details-client'), {
  loading: () => (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-12 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  )
});

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Name (Server-rendered) */}
        <h1 className="text-4xl font-heading font-light text-gray-900 mb-8 text-center">
          {product.title}
        </h1>

        {/* Client-side interactive components */}
        <ProductDetailsClient product={product} />

        {/* Product Details Tabs (Server-rendered) */}
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="usage">Usage Guide</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-normal">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#1A6B3D] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-normal">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="usage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-normal">Installation & Usage Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Installation Steps:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed">
                      <li>Prepare the installation area and gather required tools</li>
                      <li>Install the main water line and connect to water source</li>
                      <li>Set up the filtration system and pressure regulator</li>
                      <li>Layout the drip lines according to your crop pattern</li>
                      <li>Test the system and adjust flow rates as needed</li>
                    </ol>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-3">Maintenance Tips:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                      <li>Clean filters regularly to prevent clogging</li>
                      <li>Check for leaks and damaged components monthly</li>
                      <li>Flush the system periodically to remove sediment</li>
                      <li>Store components properly during off-season</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products (Server-rendered) */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-heading font-light text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}