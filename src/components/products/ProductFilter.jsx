import React from "react";
import "@/components/products-ui/ProductFilter.css";

function ProductFilter({ isFilter }) {
  return (
    <aside
      className={`filters ${isFilter ? "hide-filters" : ""}`}
      aria-label="Product Filters"
    >
      <form className="filters__form">
        {/* CUSTOMIZABLE */}
        <section className="filter">
          <label className="filter__checkbox">
            <input type="checkbox" name="customizable" />
            <span>CUSTOMIZABLE</span>
          </label>
        </section>

        {/* IDEAL FOR */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">IDEAL FOR</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="true"
              aria-label="Collapse Ideal For"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72003 10.73L7.0667 6.3849C7.58003 5.87174 8.42003 5.87174 8.93336 6.3849L13.28 10.73"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>

          <div className="filter__content">
            <button
              type="button"
              className="filter__clear"
              aria-label="Unselect all Ideal For"
            >
              Unselect all
            </button>

            <div
              className="filter__options"
              role="group"
              aria-label="Ideal For Options"
            >
              <label className="filter__option">
                <input type="checkbox" name="idealFor" value="men" />
                <span>Men</span>
              </label>

              <label className="filter__option">
                <input type="checkbox" name="idealFor" value="women" />
                <span>Women</span>
              </label>

              <label className="filter__option">
                <input type="checkbox" name="idealFor" value="kids" />
                <span>Baby &amp; Kids</span>
              </label>
            </div>
          </div>
        </section>

        {/* OCCASION */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">OCCASION</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>

        {/* WORK */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">WORK</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>

        {/* FABRIC */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">FABRIC</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>

        {/* SEGMENT */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">SEGMENT</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>

        {/* SUITABLE FOR */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">SUITABLE FOR</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>

        {/* RAW MATERIALS */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">RAW MATERIALS</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>

        {/* PATTERN */}
        <section className="filter">
          <header className="filter__header">
            <h3 className="filter__title">PATTERN</h3>
            <button
              type="button"
              className="filter__toggle"
              aria-expanded="false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
                  stroke="#292D32"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>
          <p className="filter__meta">All</p>
        </section>
      </form>
    </aside>
  );
}

export default ProductFilter;
