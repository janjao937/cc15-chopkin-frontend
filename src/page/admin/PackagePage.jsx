import React from "react";
import SearchInput from "../../components/SearchInput";
import useRes from "../../Hooks/use-res";
import PackageList from "../../features/admin/PackageList";
import { useEffect } from "react";
import useAuth from "../../Hooks/use-auth";
import axios from "../../config/axios";
import { useState } from "react";

export default function PackagePage() {
  const { fatchPackagePendding, setFatchPackcagePendding } = useRes();
  const { authUser } = useAuth();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fatchPackagePending = async () => {
      try {
        if (authUser?.isAdmin) {
          const res = await axios.get(`/package/getPackagePending`);
          console.log("fatchPackagePending =>", res.data);
          setFatchPackcagePendding(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fatchPackagePending();
  }, []);

  let filteredPackages = fatchPackagePendding.filter(
    (x) =>
      x.name.toLowerCase().includes(searchInput) ||
      x.id.toString().toLowerCase().includes(searchInput)
  );
  console.log(filteredPackages);

  if (searchInput.length === 0) {
    filteredPackages = [];
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mb-10">
        <h1>Package Request</h1>
        <small className="mb-4">Hi, Welcome back to Admin!</small>

        <div className="mb-4">
          <SearchInput
            placeholder="Search Package ID or Name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* PackageList */}
        <div className="">
          <div className="grid grid-cols-12">
            <h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
              Request ID
            </h1>
            <h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
              Package Name
            </h1>
          </div>
          {filteredPackages.length > 0
            ? filteredPackages.map((item, index) => (
                <div key={index}>
                  <PackageList data={item} />
                </div>
              ))
            : fatchPackagePendding.map((item, index) => (
                <div key={index}>
                  <PackageList data={item} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
