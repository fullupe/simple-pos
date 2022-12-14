import React from "react";
import Button from "../components/Button";
const Intropage = () => {
  return (
    <>
      <div className="flex justify-center items-centter min-h-screen w-full bg-blue-00">
        <div className="w-1/2 h-64 flex justify-center items-centter my-auto">
          <div className="w-1/1 space-x-2 flex justify-between items-center bg-blue-100 drop-shadow-xl px-10 rounded-xl ">
            <Button name="pos" />
            <Button name="admin" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Intropage;
