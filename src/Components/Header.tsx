import React from "react";
import { Link } from "react-router-dom";

interface HeaderList {
  key: number;
  data: string;
}

const headerList: HeaderList[] = [
  {
    key: 1,
    data: "Home",
  },
  {
    key: 2,
    data: "About",
  },
  {
    key: 3,
    data: "Contact",
  },
  {
    key: 4,
    data: "Sign-In",
  },
  {
    key: 5,
    data: "Sign-Up",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex gap-4 bg-slate-500 text-white p-2">
      {headerList.map((item) => (
        <Link
          to={`/${item.data.toLowerCase()} `}
          key={item.key}
          className=" rounded bg-gray-900 p-2"
        >
          {item.data}
        </Link>
      ))}
    </div>
  );
};

export default Header;
