import React from "react";
import SearchInput from "../../components/SearchInput";
import RequestList from "../../features/admin/RequestList";
import useRes from "../../Hooks/use-res";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import axios from "../../config/axios";
import { useState } from "react";

// import { packageEditPending } from "../../data/mock-restaurantEdit";

export default function ResPenddingEditPage() {
  const {
    fatchResPendding,
    editRequestLoading,
    setEditRequestLoading,
    setFatchResPendding,
  } = useRes();
  //
  const [searchInput, setSearchInput] = useState("");
  //
  useEffect(() => {
    setEditRequestLoading(true);
    const fatchPendingEdit = async () => {
      try {
        const res = await axios.get(`/restaurant/getPendingEdit`);
        console.log("fatchPendingEdit =>", res.data);
        setFatchResPendding(res.data);
        setEditRequestLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setEditRequestLoading(false);
      }
    };
    fatchPendingEdit();
  }, []);

  const filteredRequests = fatchResPendding.filter(
    (x) =>
      x.restaurantName.toLowerCase().includes(searchInput) ||
      x.id.toString().toLowerCase().includes(searchInput)
  );

  if (editRequestLoading) return <Loading />;
  return (
    <>
      <div className="flex flex-col gap-4 p-4 mb-10">
        <h1>Edit Request</h1>
        <small className="mb-4">Hi, Welcome back to Admin!</small>

        <div className="mb-4">
          <SearchInput
            placeholder="Search Booking ID or Name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* EditPenddingList */}
        <div className="">
          <div className="grid grid-cols-12">
            <h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
              Request ID
            </h1>
            <h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
              Restaurant Name
            </h1>
          </div>
          {filteredRequests.length > 0
            ? filteredRequests.map((item, index) => (
                <div key={index}>
                  <RequestList data={item} />
                </div>
              ))
            : fatchResPendding.map((item, index) => (
                <div key={index}>
                  <RequestList data={item} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
