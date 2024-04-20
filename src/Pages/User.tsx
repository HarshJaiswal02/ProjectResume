import React from "react";
import { useParams } from "react-router-dom";

const User: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  return <div className=" bg-blue-400 ">User:{userId}</div>;
};
export default User;
