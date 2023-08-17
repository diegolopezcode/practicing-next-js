import Users from "@/components/Users";
import Image from "next/image";

const fetcUser = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data;
};

const Homepage = async () => {
  const users = await fetcUser();

  return (
    <div>
     <Users users={users} />
    </div>
  );
};
export default Homepage;
