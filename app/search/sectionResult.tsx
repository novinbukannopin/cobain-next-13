import React from "react";
import useSWR from "swr";
import Image from "next/image";
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
    <div className="">
      <div className="mb-3 mt-3">
        Result Searching : <span className="font-bold">{query}</span>
      </div>
      <div className="">{loading && "Loading ....."}</div>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.items.map((user: any, index: number) => {
            return (
              <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  src={user.avatar_url}
                  width={50}
                  height={50}
                  alt="image"
                  className="mt-1 mb-2 rounded-lg shadow-xl dark:shadow-gray-800"
                />
                <h5 className="mb-1 mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <Link href={`/search/${user.login}`} className="">
                    <span className="font-semibold">{user.login}</span>{" "}
                  </Link>
                </h5>

                {/* <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <Link href={`${user.repos_url}`}>Repository</Link>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
//
