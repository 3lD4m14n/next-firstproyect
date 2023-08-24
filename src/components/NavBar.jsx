import Link from "next/link";

function NavBar() {

    return <div className=" text-white border-b-2 border-gray-200 border-double flex justify-around h-1/6 items-center">
        <h1 className="text-4xl"><Link href={"/"}>Users</Link></h1>
        <ul className="flex flex-col justify-around h-full">
            <li><Link className="text-2xl " href={"/"}>home</Link></li>
            <li><Link className="text-2xl" href={"/About"}>About</Link></li>
        </ul>
    </div>
}

export default NavBar;