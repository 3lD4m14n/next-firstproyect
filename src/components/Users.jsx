import UserCard from "./UserCard"

async function loadUsers() {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const data = await res.json()
  return data.data
}

export default async function Users() {
  const users = await loadUsers()

  return <ul className="grid lg:grid-cols-3 sm:grid-cols-2 p-5 gap-5">
    { users.map((user) => {
      return <li key={user.id}>
        <UserCard user={user}/>
      </li>
    } ) }
  </ul>
}