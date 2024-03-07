"use client";
import Link from "next/link";
import React from "react";

const ButtonCard = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div>
      <button className="bg-[white] text-black p-5">
        <Link href="/users">Get users data</Link>
      </button>
    </div>
  );
};

export default ButtonCard;
