
import CategoryPage from "./CategoryPage";


const Category = ({ params }: { params: { category: string } }) => {
  return (
    <div className="mb-40 mt-20">
      <CategoryPage params={params} />
    </div>
  );
};

export default Category;
