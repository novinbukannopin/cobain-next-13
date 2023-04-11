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
      DetailUserPage {params.slug}
      <div className="">Username : {data.login}</div>
      <img src={data.avatar_url} width={50} alt="" />
      <div className="">User ID : {data.id}</div>
      <div className="">Bio : {data.bio}</div>
      <div className="">Repos : {data.public_repos}</div>
      <div className="">Following : {data.following}</div>
      <div className="">Followers : {data.followers}</div>
    </div>
  );
}
