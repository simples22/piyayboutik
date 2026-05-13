"use client";

import { useEffect, useState } from "react";
import { marykayProducts } from "@/data/marykayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [scrollDir, setScrollDir] = useState("top");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setScrollDir("top");
      } else if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSearch(value) {
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const filtered = marykayProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 6));
  }

  function clearSearch() {
    setQuery("");
    setResults([]);
  }

  return (
    <div className={`pbSearch pbSearch-${scrollDir}`}>
      <div className="pbSearchInputWrap">
        <FontAwesomeIcon icon={faMagnifyingGlass} />

        <input
          type="text"
          placeholder="Search Mary Kay products..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />

        {query && (
          <button type="button" onClick={clearSearch}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="pbSearchResults">
          {results.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="pbSearchItem"
            >
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}