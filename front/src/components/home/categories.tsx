import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Baby, Smartphone, Watch } from 'lucide-react'

const categories = [
  { name: 'Men', icon: Baby },
  { name: 'Women', icon: Smartphone },
  { name: 'Kids', icon: Baby },
  { name: 'Accessories', icon: Watch },
]

export default function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <category.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

