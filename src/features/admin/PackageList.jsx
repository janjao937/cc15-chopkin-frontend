import React from "react";
import PackageItem from "./PackageItem";

export default function PackageList({ data }) {
  // console.log(data);

  return (
    <>
      <PackageItem obj={data} restaurantId={data.id} packageName={data.name} />
    </>
  );
}
