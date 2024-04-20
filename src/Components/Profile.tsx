import React, { useContext } from "react";
import UserContext from "../ContextApi/UserContext";

const Profile: React.FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Profile Name: {user}
    </div>
  );
};

export default Profile;
