import useItems from "../hooks/useItems";
import ItemCategory from "./ItemCategory";
import SectionTitle from "./SectionTitle";

const Item = () => {
  const [item] = useItems();
  const BestSeller = item.filter((item) => item.types === "BestSeller");
  const Discount = item.filter((item) => item.types === "Discount");
  const NewArrival = item.filter((item) => item.types === "NewArrival");

  return (
    <section>
      <SectionTitle title="Best Sellers of the Day"></SectionTitle>
      <ItemCategory items={BestSeller}></ItemCategory>
      <SectionTitle title="Top 10 Discounts"></SectionTitle>
      <ItemCategory items={Discount}></ItemCategory>
      <SectionTitle title="New Arrivals of the week"></SectionTitle>
      <ItemCategory items={Discount}></ItemCategory>
    </section>
  );
};

export default Item;
