const getUserData = async (id) => {
 const resp = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await resp.json();
  return data.data;
};
const UserPage = async ({ params }) => {
  const user = await getUserData(params.id);
  return (
    <div className="bg-slate-400 p-10 rounded-md">
        <img src={user.avatar} alt={user.first_name} className="m-auto my-4" />
        <h3 className="text-3xl font-bold">{user.first_name} {user.last_name}</h3>

    </div>
  );
};
export default UserPage;
