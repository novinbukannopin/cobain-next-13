"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const onSearch = (e: any) => {
    e.preventDefault();
    const data = e.target[0].value;
    setQuery(data);
  };
  return (
    <div>
      SearchPage
      <div>
        <form onSubmit={onSearch}>
          <input placeholder="Cari orang" />
          <button>Search</button>
        </form>
        <SectionResult query={query} />
      </div>
    </div>
  );
}
