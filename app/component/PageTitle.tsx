import React from "react";

interface props {
  title: any;
}
export default function PageTitle({ title }: props) {
  return <div className="font-bold text-lg mb-5">{title}</div>;
}
