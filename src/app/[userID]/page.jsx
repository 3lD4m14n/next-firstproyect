import UserCard from "@/components/UserCard"

async function loadUser(userID) {
    const res = await fetch(`https://reqres.in/api/users/${userID}`)
    const data = await res.json()
    return data.data
}

async function SingleUser({params}) {
    const user = await loadUser(params.userID)

    //console.log(userID)

    return <div className="flex justify-center items-center h-full">
        <div className="w-1/2">
            <UserCard user={user}/>
        </div>
    </div>
}

export default SingleUser