import ResBussiTime from "../features/restaurant/ResBusiTime";
import useRes from "../Hooks/use-res";
import useAuth from "../Hooks/use-auth";
import axios from "../config/axios";
import EditResInfo from "../components/EditResInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ResEditPendingPage() {
  const { resId } = useParams();
  const newResId = String(resId);

  const { resEditPending, resEditPendingBussiTime } = useRes();
  const { authUser } = useAuth();

  const [resById, setResById] = useState({});

  const [inputMon, setInputMon] = useState({
    day: 1,
    openTime: "-",
    closedTime: "-",
  });
  const [inputTue, setInputTue] = useState({
    day: 2,
    openTime: "-",
    closedTime: "-",
  });
  const [inputWed, setInputWed] = useState({
    day: 3,
    openTime: "-",
    closedTime: "-",
  });
  const [inputThu, setInputThu] = useState({
    day: 4,
    openTime: "-",
    closedTime: "-",
  });
  const [inputFri, setInputFri] = useState({
    day: 5,
    openTime: "-",
    closedTime: "-",
  });
  const [inputSat, setInputSat] = useState({
    day: 6,
    openTime: "-",
    closedTime: "-",
  });
  const [inputSun, setInputSun] = useState({
    day: 7,
    openTime: "-",
    closedTime: "-",
  });

  useEffect(() => {
    fatchResById();
  }, []);

  const fatchResById = async () => {
    try {
      const res = await axios.get(`/restaurant/resById/${newResId}`);
      console.log("fatchResById=>", res);
      setResById(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnSubmit = () => {
    const data = [];
    data.push(
      inputMon,
      inputTue,
      inputWed,
      inputThu,
      inputFri,
      inputSat,
      inputSun
    );
    resEditPending();
    resEditPendingBussiTime(data.filter((item) => item.openTime !== "-"));
  };

  return (
    <div className="">
      {/* EditRes */}
      <EditResInfo handleOnSubmit={handleOnSubmit}/>
      {/* EdktBussiTime */}
      <ResBussiTime
        resById={resById}
        // inputBusiTime={inputBusiTime}
        // setInputBusiTime={setInputBusiTime}
        inputMon={inputMon}
        setInputMon={setInputMon}
        inputTue={inputTue}
        setInputTue={setInputTue}
        inputWed={inputWed}
        setInputWed={setInputWed}
        inputThu={inputThu}
        setInputThu={setInputThu}
        inputFri={inputFri}
        setInputFri={setInputFri}
        inputSat={inputSat}
        setInputSat={setInputSat}
        inputSun={inputSun}
        setInputSun={setInputSun}
      />
      {/* <div className="flex items-center justify-center">
        <button
          onClick={handleOnSubmit}
          className={`text-white px-8 py-2 border rounded-full bg-secondary`}
        >
          Submit
        </button>
      </div> */}
    </div>
  );
}
