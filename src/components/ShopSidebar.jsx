"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faXmark,
  faArrowRight,
  faRotateLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const baseCategories = [
  "Skincare",
  "Moisturizer",
  "Serum",
  "Makeup",
  "Body Care",
  "Beauty Sets",
];

const priceRanges = [
  { label: "All prices", value: "all" },
  { label: "Under $25", value: "under-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100+", value: "100-plus" },
];

function FilterAccordion({ title, eyebrow, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`pbSidebarBox pbFilterAccordion ${open ? "active" : ""}`}>
      <button
        type="button"
        className="pbFilterAccordionBtn"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>
          {eyebrow && <small className="pbEyebrow">{eyebrow}</small>}
          <strong>{title}</strong>
        </span>

        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <div className="pbFilterAccordionPanel">{children}</div>
    </div>
  );
}

export default function ShopSidebar({
  products = [],
  selectedCategories = [],
  setSelectedCategories,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  resetFilters,
  onFilterChange,
}) {
  const [open, setOpen] = useState(false);

  const categories = useMemo(() => {
    const fromData = products.map((product) => product.category).filter(Boolean);
    return [...new Set([...baseCategories, ...fromData])];
  }, [products]);

  function toggleCategory(category) {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });

    onFilterChange?.();
  }

  function handlePriceChange(value) {
    setPriceRange(value);
    onFilterChange?.();
  }

  function handleSortChange(value) {
    setSortBy(value);
    onFilterChange?.();
  }

  return (
    <>
      <div className="pbMobileFilterBar">
        <button type="button" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faSliders} />
          Filters
        </button>
      </div>

      <aside className={`pbShopSidebar ${open ? "open" : ""}`}>
        <div className="pbSidebarMobileHead">
          <h3>Filters</h3>

          <button type="button" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="pbFilterTools">
          <button type="button" className="pbResetAllFilter" onClick={resetFilters}>
            <FontAwesomeIcon icon={faRotateLeft} />
            Reset filters
          </button>
        </div>

        <FilterAccordion title="Shop by category" eyebrow="Filter" defaultOpen>
          <div className="pbFilterCheckList">
            {categories.map((category) => (
              <label className="pbFilterCheck" key={category}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />

                <span className="pbCheckBox"></span>
                <span>{category}</span>
              </label>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion title="Filter by price" eyebrow="Price">
          <div className="pbFilterRadioList">
            {priceRanges.map((item) => (
              <label className="pbFilterRadio" key={item.value}>
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === item.value}
                  onChange={() => handlePriceChange(item.value)}
                />

                <span className="pbRadioDot"></span>
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion title="Product order" eyebrow="Sort">
          <select
            className="pbSortSelect"
            value={sortBy}
            onChange={(event) => handleSortChange(event.target.value)}
          >
            <option value="featured">Featured first</option>
            <option value="az">Name A-Z</option>
            <option value="za">Name Z-A</option>
            <option value="price-low">Price low to high</option>
            <option value="price-high">Price high to low</option>
          </select>
        </FilterAccordion>

        <div className="pbSidebarAd">
          <span>Mary Kay® Access</span>
          <h3>Build your premium beauty routine today.</h3>
          
          <p>
            avecosmetico.com is an independent platform operated by a Mary Kay®
            Independent Beauty Consultant.
          </p>

          <a
            href="https://marykay.com/piyayboutik.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Continue to Mary Kay <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="pbSidebarBoxLink">
          <h3>Beauty Guide</h3>
          <p>
            Need help choosing products? Explore simple skincare routines and
            beauty tips before continuing to Mary Kay.
          </p>

          <Link href="/skincare-guide" onClick={() => setOpen(false)}>
            Read Guide <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </aside>

      {open && (
        <div className="pbSidebarOverlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}