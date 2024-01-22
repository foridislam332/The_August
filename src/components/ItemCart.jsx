

const ItemCart = ({ item }) => {
    const { image, name} = item;
    return (
      <div>
        <div className="card rounded-none m-2 h-full glass">
          <figure className="">
            <img className="w-full h-96" src={image} alt="image!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{name}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn bg-dark text-white">Buy now!</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemCart;