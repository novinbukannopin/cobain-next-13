import React from "react";
import useSWR from "swr";
import Link from "next/link";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface props {
  query: string;
}
export default function SectionResult({ query }: props) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );
  var loading = !data && !error;
  return (
    <div style={{ marginTop: "10px" }}>
      Result Searching : {query}
      <div className="">{loading && "Loading ....."}</div>
      {data &&
        data.items.map((user: any, index: number) => {
          return (
            <ul key={index}>
              <li>
                <Link href={`/search/${user.login}`}>{user.login}</Link>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
//
