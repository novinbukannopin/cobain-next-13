import React from "react";

interface props {
  query: string;
}
export default function SectionResult({ query }: props) {
  return <div style={{ marginTop: "10px" }}>Result Searching : {query}</div>;
}
