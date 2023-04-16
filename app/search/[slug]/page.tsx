import PageTitle from "@/app/component/PageTitle";
import Link from "next/link";
import React from "react";

async function getData(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}`);
  return res.json();
}

export default async function DetailUserPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);
  return (
    <div>
      <PageTitle title={"Detail User Page"} />
      <div className="flex space-x-3 ">
        <div className="w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <Link href="#">
                <img src={data.avatar_url} width={50} alt="" />
              </Link>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Follow
                </button>
              </div>
            </div>
            <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
              <a href="#">{data.login}</a>
            </p>
            <p className="mb-3 text-sm font-normal">
              <a href="#" className="hover:underline"></a>
            </p>
            <p className="mb-4 text-sm">
              {/* Open-source contributor. Building{" "} */}
              {data.bio}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                flowbite.com
              </a>
              .
            </p>
            <ul className="flex text-sm">
              <li className="mr-2">
                <a href="#" className="hover:underline">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {data.following}
                  </span>
                  <span> Following</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {data.followers}
                  </span>
                  <span> Followers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="">
          <div className="">Username : {data.login}</div>
          <div className="">User ID : {data.id}</div>
          <div className="">Bio : {data.bio ? data.bio : "-"}</div>
          <div className="">Repos : {data.public_repos}</div>
          <div className="">Following : {data.following}</div>
          <div className="">Followers : {data.followers}</div>
        </div> */}
      </div>
    </div>
  );
}
