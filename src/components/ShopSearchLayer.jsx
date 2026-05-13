"use client";

import { useEffect, useRef, useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function ShopSearchLayer() {
  const heroSearchRef = useRef(null);
  const [fixedVisible, setFixedVisible] = useState(false);

  useEffect(() => {
    if (!heroSearchRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFixedVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "-90px 0px 0px 0px",
      }
    );

    observer.observe(heroSearchRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={heroSearchRef} className="pbHeroSearchWrap">
        <SearchBar />
      </div>

      <div className={`pbFixedSearchBar ${fixedVisible ? "show" : ""}`}>
        <div className="pbContainer">
          <SearchBar />
        </div>
      </div>
    </>
  );
}