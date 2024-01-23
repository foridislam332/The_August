import useItems from "../hooks/useItems";
import Brands from "./FilterItems/Brands";
import Category from "./FilterItems/Category";
import ModestClothing from "./FilterItems/ModestClothing";
import Style from "./FilterItems/Style";
import ItemCategory from "./ItemCategory";
import SectionTitle from "./SectionTitle";
import TrendingItems from "./TrendingItems";

const WomenItem = () => {
  const [item] = useItems();
  const category = "Women";

  const BestSeller = item.filter(
    (item) => item.types === "BestSeller" && item.category === category
  );
  const Discount = item.filter(
    (item) => item.types === "Discount" && item.category === category
  );
  const NewArrival = item.filter(
    (item) => item.types === "NewArrival" && item.category === category
  );

  return (
    <section>
      <SectionTitle title="Best Sellers of the Day"></SectionTitle>
      <ItemCategory items={BestSeller}></ItemCategory>
      <SectionTitle title="Top 10 Discounts"></SectionTitle>
      <ItemCategory items={Discount}></ItemCategory>
      <SectionTitle title="New Arrivals of the week"></SectionTitle>
      <ItemCategory items={NewArrival}></ItemCategory>
      <SectionTitle title="Shop By Category"></SectionTitle>
      <Category></Category>
      <SectionTitle title="Shop By Style"></SectionTitle>
      <Style></Style>
      <SectionTitle title="Best Of Modest Clothing"></SectionTitle>
      <ModestClothing></ModestClothing>
      <SectionTitle title="Featured Brands"></SectionTitle>
      <Brands></Brands>
      <SectionTitle title="Top Trending"></SectionTitle>
      <TrendingItems items={item}></TrendingItems>
    </section>
  );
};

export default WomenItem;
