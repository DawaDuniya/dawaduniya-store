import getCategory from "@/actions/get-category";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { ArrowBigLeft, ArrowBigRightDashIcon, ArrowLeftSquare, ArrowRight, ArrowRightSquare, MoveRight } from "lucide-react";


interface CategoryPageProps {
  params: {
    categoryId: string;
  }
}

export const revalidate = 0;
const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  params, 
}) => {
  const products = await getProducts({ 
    categoryId: params.categoryId,
  });
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <div className="mt-16 bg-[#36990b] px-4 py-1 items-center text-white font-bold text-xl">
          <ArrowRightSquare className="inline"/> <span>{category.name}</span>
        </div>
        <Billboard 
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="mt-6 lg:col-span-12 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;