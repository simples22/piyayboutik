"use client";

import { useMemo, useRef, useState, useCallback } from "react";
import ProductGrid from "@/components/ProductGrid";
import ShopSidebar from "@/components/ShopSidebar";

const PRODUCTS_PER_PAGE = 18;

function getPriceValue(product) {
  const raw =
    product.priceValue ??
    product.priceAmount ??
    product.amount ??
    product.price;

  if (typeof raw === "number") return raw;

  if (typeof raw === "string") {
    const cleaned = raw.replace(/[^0-9.]/g, "");
    const value = Number(cleaned);

    return Number.isFinite(value) ? value : 0;
  }

  return 0;
}

export default function ShopProductsClient({ products = [] }) {
  const [page, setPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const containerRef = useRef(null);

  const selectedSet = useMemo(
    () => new Set(selectedCategories),
    [selectedCategories]
  );

  const filteredProducts = useMemo(() => {
    let items = products.filter((product) => {
      const matchCategory =
        selectedSet.size === 0 || selectedSet.has(product.category);

      return matchCategory;
    });

    if (priceRange !== "all") {
      items = items.filter((product) => {
        const price = getPriceValue(product);

        if (price <= 0) return false;

        if (priceRange === "under-25") return price < 25;
        if (priceRange === "25-50") return price >= 25 && price <= 50;
        if (priceRange === "50-100") return price > 50 && price <= 100;
        if (priceRange === "100-plus") return price > 100;

        return true;
      });
    }

    return [...items].sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      if (sortBy === "price-low") return getPriceValue(a) - getPriceValue(b);
      if (sortBy === "price-high") return getPriceValue(b) - getPriceValue(a);

      return Number(b.featured) - Number(a.featured);
    });
  }, [products, selectedSet, priceRange, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  );

  const safePage = Math.min(page, totalPages);

  const paginatedProducts = useMemo(() => {
    const start = (safePage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, safePage]);

  const resetPage = useCallback(() => {
    setPage(1);
  }, []);

  function goToPage(nextPage) {
    setPage(nextPage);

    setTimeout(() => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  function resetFilters() {
    setSelectedCategories([]);
    setPriceRange("all");
    setSortBy("featured");
    setPage(1);
  }

  return (
    <section className="pbShopLayoutSection">
      <div className="pbContainer pbShopLayout">
        <ShopSidebar
          products={products}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
          resetFilters={resetFilters}
          onFilterChange={resetPage}
        />

        <div className="pbShopContent" ref={containerRef}>
          <div className="pbShopTopbar">
            <div>
              <h2>Featured beauty selection</h2>
            </div>

            <p>
              {filteredProducts.length} / {products.length} products
            </p>
          </div>

          <div className="pbShopGridOnly">
            <ProductGrid products={paginatedProducts} />
          </div>

          {filteredProducts.length === 0 && (
            <div className="pbEmptyProducts">
              <h3>No products found</h3>
              <p>Try removing a category or changing the price filter.</p>
              <button type="button" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          )}

          {filteredProducts.length > PRODUCTS_PER_PAGE && (
            <div className="pbPagination">
              <button
                type="button"
                disabled={safePage === 1}
                onClick={() => goToPage(safePage - 1)}
              >
                ← Prev
              </button>

              <span>
                Page {safePage} / {totalPages}
              </span>

              <button
                type="button"
                disabled={safePage === totalPages}
                onClick={() => goToPage(safePage + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}