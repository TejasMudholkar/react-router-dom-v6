import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-3xl p-4">
      <div>{data?.name}</div>
      Github followers: {data?.followers}
      <img className="" src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tejasmudholkar");
  return response.json();
};
