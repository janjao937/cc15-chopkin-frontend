import React, { useEffect } from "react";
import useRes from "../../Hooks/use-res";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blank from "../../assets/blank.png";
import { toast } from "react-toastify";

export default function ViewPackagePendding() {
  const {
    getPackagePendding,
    fatchPackagePendding,
    createPackage,
    deletePackagePendding,
  } = useRes();
  // console.log("PackagePennding =>", fatchPackagePendding);

  useEffect(() => {
    getPackagePendding();
  }, []);

  const { packageId } = useParams();
  // console.log("packageId =>", packageId);

  const findPackage = fatchPackagePendding.find(
    (item) => item.id === +packageId
  );
  console.log("findPackage =>", findPackage);

  // console.log(typeof findPackage.restaurantId);

  const input = {
    name: findPackage?.name,
    detail: findPackage?.detail,
    price: findPackage?.price,
    img: findPackage?.img,
    status: 1,
    restaurantId: findPackage?.restaurantId,
  };

  // console.log("input", input);

  const handleClickApprove = () => {
    createPackage(findPackage?.restaurantId, input);
    toast.success(`Approve Package : ${packageId}`);
    deletePackagePendding(packageId);
  };

  const handleClickReject = () => {
    deletePackagePendding(packageId);
    toast.warning(`Reject Package : ${packageId}`);
  };

  return (
    <div className="flex flex-col m-4 gap-4">
      <h1 className="text-center text-2xl font-semibold uppercase underline text-primary px-4 py-2">
        Package Request
      </h1>
      {/* <h3 className="text-center text-xl font-semibold uppercase text-primary">
				restaurant Name
			</h3> */}

      <div className="flex flex-col gap-4 items-center justify-center mb-4 px-4 py-2">
        <div className="w-[600px] h-[300px] overflow-hidden rounded-xl shadow-lg mb-4">
          <img
            src={findPackage?.img || blank}
            alt="image"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 uppercase text-primary">
            package-name :
          </div>
          <div className="col-span-6">{findPackage?.name}</div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 uppercase text-primary">
            package-detail :
          </div>
          <div className="col-span-6 ">{findPackage?.detail}</div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 uppercase text-primary">
            package-price :
          </div>
          <div className="col-span-6">{findPackage?.price}</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link to="/admin/package">
          <button
            className={`bg-green-500 hover:bg-green-400 px-8 py-2 rounded-full text-white`}
            onClick={handleClickApprove}
          >
            Approve
          </button>
        </Link>
        <Link to="/admin/package">
          <button
            className={`bg-red-500 hover:bg-red-400 px-10 py-2 rounded-full text-white`}
            onClick={handleClickReject}
          >
            Reject
          </button>
        </Link>
      </div>
    </div>
  );
}
