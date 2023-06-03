import React from "react";

const Feedback = () => {
  return (
    <div className="feedback-about">
      <h1 className="font-bold text-7xl uppercase mt-[550px]">
        We value your feedback
      </h1>
      <div className="flex items-center gap-10 mx-20">
        <div className="w-[30%]">
          <p>
            The company is continuously looking for ways to{" "}
            <span>enhance its ability to add value to its services</span> in
            order to surpass the customer's expectations
          </p>
          <p className="mt-5">
            This we do by listening and{" "}
            <span>taking time to know our customers </span> and understand their
            business better.
          </p>
        </div>
        <div className="w-[60%] bg-gradient-to-b from-[transparent] to-[#1b25bc] bg-opacity-57 p-4">
          <h1 className="font-sans font-bold text-[#000] text-xl mon">
            Question, comment
          </h1>

          <hr className="w-[100%] my-2" />
          <form action="" className="flex flex-col gap-3">
            <div className="flex gap-5">
              <input
                type="text"
                className="rounded-md p-1 w-[50%] outline-none border-none bg-[#fff]"
                placeholder="Name/company"
              />
              <input
                type="text"
                placeholder="Email address"
                className="rounded-md w-[50%] p-1 outline-none border-none bg-[#fff]"
              />
            </div>
            <textarea
              name=""
              className="rounded-md p-4"
              placeholder="your message here"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <div className="flex justify-end">
              <button className="bg-[#f8f8f8] p-1 rounded-lg uppercase font-sans font-light text-[#000]">
                Real time tracker
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
