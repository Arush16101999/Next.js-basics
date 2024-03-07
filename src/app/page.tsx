import Image from "next/image";
import Link from "next/link";
import ButtonCard from "./components/ButtonCard";
import ServerButton from "./components/ServerButton";

export default function Home() {
  const handleServerAction = () => {
    console.log("This is a server action printed on the server console");
  };
  return (
    <div className="grid place-items-center mt-10">
      {/* <button
        className="bg-[white] text-black p-5"
        // onClick={handleServerAction}
      >
        Do Server Action
      </button> */}
      <ServerButton />
      <br />
      {/* <div className="usersdata">
        <Link href="/users">Navigate to Users</Link>
      </div> */}
      <br />
      <ButtonCard />
    </div>
  );
}
