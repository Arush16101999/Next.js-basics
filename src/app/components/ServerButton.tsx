"use client";
import Link from "next/link";
import React from "react";

const ServerButton = () => {
  const handleClick = () => {
    console.log("This is server action printed on server console");
  };
  return (
    <div>
      <button onClick={handleClick} className="bg-[white] text-black p-5">
        Do Server Action in Console
      </button>
    </div>
  );
};

export default ServerButton;
