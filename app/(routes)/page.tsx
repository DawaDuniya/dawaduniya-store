import getBillboard from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("ff835de9-a5f5-4ba1-974a-1541bca2789b");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
        

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
