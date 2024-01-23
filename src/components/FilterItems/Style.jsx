import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Style = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
    return (
      <div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Wedding Wear</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Daily Pret Wear</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">
                Festive Pret Wear
              </h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Designer Luxury</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">
                Winter Unstitched
              </h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">
                Festive Unstitched
              </h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">
                Summer Unstitched
              </h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Hand Bags</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Jewellery</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Western Wear</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Active Wear</h2>
            </div>
          </Link>
          <Link className="card glass">
            <figure>
              <img
                className="rounded-full lg:w-52 lg:h-52"
                src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="lg:text-xl font-bold text-center">Footwear</h2>
            </div>
          </Link>
          {showAll && (
            <>
              <Link className="card glass">
                <figure>
                  <img
                    className="rounded-full lg:w-52 lg:h-52"
                    src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="lg:text-xl font-bold text-center">Footwear</h2>
                </div>
              </Link>
              <Link className="card glass">
                <figure>
                  <img
                    className="rounded-full lg:w-52 lg:h-52"
                    src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="lg:text-xl font-bold text-center">Footwear</h2>
                </div>
              </Link>
              <Link className="card glass">
                <figure>
                  <img
                    className="rounded-full lg:w-52 lg:h-52"
                    src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="lg:text-xl font-bold text-center">Footwear</h2>
                </div>
              </Link>
              <Link className="card glass">
                <figure>
                  <img
                    className="rounded-full lg:w-52 lg:h-52"
                    src="https://i.ibb.co/DVvyV4V/girl1.jpg"
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="lg:text-xl font-bold text-center">Footwear</h2>
                </div>
              </Link>
            </>
          )}
        </div>
        {!showAll && (
          <div className="text-center mt-4 flex justify-center">
            <button
              className="text-blue cursor-pointer flex items-center justify-center"
              onClick={toggleShowAll}
            >
              View All Categories <IoIosArrowDown />
            </button>
          </div>
        )}
        {showAll && (
          <div className="text-center mt-4 flex justify-center">
            <button
              className="text-blue cursor-pointer flex items-center justify-center"
              onClick={toggleShowAll}
            >
              View Less <IoIosArrowUp />
            </button>
          </div>
        )}
      </div>
    );
};

export default Style;