import React from "react";
import Link from "next/link";

interface props {
  title: string;
  address: any;
}

export default function MenuItem({ title, address }: props) {
  return (
    <div className="">
      <Link href={address}>{title}</Link>
    </div>
  );
}
