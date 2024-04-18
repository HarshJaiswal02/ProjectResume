import React from "react";
import { useParams } from "react-router-dom";

const User: React.FC = () => {
  const userId = useParams();
  return (<>User:{userId}</>)
};
export default User;
