import Link from "next/link"

function UserCard({user}) {
    return <Link href={`/${user.id}`} className=" rounded-md bg-slate-600 flex flex-col justify-between items-center p-3 lg:flex-row">
        <div className="font-serif">
            <h2 className=" text-xl font-bold">{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
        </div>
        <img className="rounded-full w-36 h-36 object-cover" src={user.avatar} alt="User Avatar"/>
    </Link>
}

export default UserCard