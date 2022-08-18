import React from "react";
import Button from "../components/Button";
const Intropage = ({ name }) => {
  return (
    <>
      <div className="flex justify-center items-centter min-h-screen w-full bg-blue-400">
        <div className="w-1/2 h-64 flex justify-center items-centter my-auto">
          <div className="w-96 flex justify-between items-center">
            <Button name="pos" />
            <Button name="admin" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Intropage;
git;
