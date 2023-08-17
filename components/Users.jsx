
import Link from "next/link";

function Users({users}) {
  return (
    <ul>
        {users.data.map((user) => {
          return (
            <Link href={`/users/${user.id}`} key={user.id}>
            <li
              key={user.id}
              className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
            >
              <div>
                <h5 className="font-bold">
                  {user.id}. {user.first_name} {user.last_name}
                </h5>
                <p className="text-slate-100">Email: {user.email}</p>
                </div>
                <img
                className="rounded-full w-20"
                  src={user.avatar}
                  alt={user.first_name}

                />
            </li>
            </Link>
          );
        })}
      </ul>
  )
}

export default Users