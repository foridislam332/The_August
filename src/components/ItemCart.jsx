

const ItemCart = ({ item }) => {
    const { image, name} = item;
    return (
      <div>
        <div className="card rounded-none m-2 h-96 glass">
          <figure className="h-3/4">
            <img className="h-full w-full" src={image} alt="image!" />
          </figure>
          <div className="p-2 h-1/4">
            <h2 className=" font-bold text-center text-xl lg:text-2xl">{name}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline text-dark btn-sm border-2">Buy now!</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemCart;