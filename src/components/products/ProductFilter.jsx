"use client";
import React, { useState } from "react";
import { filterData } from "@/lib/filterData";
import "@/components/products-ui/ProductFilter.css";

function ProductFilter({
  isFilter,
  selected,
  setSelected,
  selectAllState,
  setSelectAllState,
}) {
  // console.log("filterData:", filterData);
  const [openSection, setOpenSection] = useState(null);
  const [toggleArrow, setToggleArrow] = useState(false);

  function handleToggle(id) {
    const filterId = filterData.forEach((filterObj) =>
      filterObj.id === id ? true : false,
    );
    setOpenSection((prev) => (prev === id ? null : id));
    if (filterId) setToggleArrow(!toggleArrow);
  }

  function handleSelectAll(id, options) {
    const currentAllSelected = selectAllState[id] || false;
    const newAllSelected = !currentAllSelected;
    setSelectAllState((prev) => ({
      ...prev,
      [id]: newAllSelected,
    }));

    setSelected((prev) => ({
      ...prev,
      [id]: newAllSelected ? options.map((opt) => opt.value) : [],
    }));
  }

  function handleCheckboxChange(filterId, value) {
    setSelected((prev) => {
      const currentValues = prev[filterId] || [];
      const isSelected = currentValues.includes(value);
      const newValues = isSelected
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      // Update selectAllState based on whether all options are selected
      const filter = filterData.find((f) => f.id === filterId);
      const allSelected = filter && newValues.length === filter.options.length;

      setSelectAllState((prevAll) => ({
        ...prevAll,
        [filterId]: allSelected,
      }));

      return {
        ...prev,
        [filterId]: newValues,
      };
    });
  }
  // console.log("selected:", selected);
  // console.log("selectAllState:", selectAllState);

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
        {filterData.map((filter, i) => {
          const isOpen = openSection === filter.id;
          const selectedValues = selected[filter.id] || [];
          return (
            <section key={filter.id} className="filter">
              <header className="filter__header">
                <button
                  type="button"
                  className={`filter__toggle`}
                  aria-expanded="true"
                  aria-label="Collapse Ideal For"
                  onClick={() => handleToggle(filter.id)}
                >
                  <h3 className="filter__title">{filter.title}</h3>
                  <div className={`rotate_arrow ${isOpen ? "active" : ""}`}>
                    {toggleArrow ? (
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
                    ) : (
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
                    )}
                  </div>
                </button>
              </header>
              <div className="drop_down-content">
                <p className="filter__meta">All</p>

                <div className={`filter__content${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="filter__clear"
                    aria-label={
                      selectAllState[filter.id] ? "Unselect all" : "Select all"
                    }
                    onClick={() => handleSelectAll(filter.id, filter.options)}
                  >
                    {selectAllState[filter.id] ? "Unselect all" : "Select all"}
                  </button>
                  {/* Filter options */}
                  <div
                    className="filter__options"
                    role="group"
                    aria-label="Ideal For options"
                  >
                    {filter.options.map((opt) => {
                      const isChecked = (selected[filter.id] || []).includes(
                        opt.value,
                      );
                      return (
                        <label className="filter__option" key={opt.value}>
                          <input
                            type="checkbox"
                            name={filter.id}
                            value={opt.value}
                            checked={isChecked}
                            onChange={() =>
                              handleCheckboxChange(filter.id, opt.value)
                            }
                          />
                          <span>{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </form>
    </aside>
  );
}

export default ProductFilter;
