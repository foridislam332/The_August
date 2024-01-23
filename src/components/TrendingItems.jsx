
import ItemCart from './ItemCart';

const TrendingItems = ({ items }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {items.map((item) => (
        <div key={item._id}>
          <ItemCart item={item} />
        </div>
      ))}
    </div>
  );
};

export default TrendingItems;