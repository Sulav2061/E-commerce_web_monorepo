import { AiOutlineRise } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { MdWarehouse } from "react-icons/md";

export const cardItems = [
  {
    id: 1,
    icon: <ImUsers size={35} color="#8E6CEF" />,
    name: "New Users",
    count: "23456",
  },
  {
    id: 2,
    icon: <MdWarehouse size={35} color="#8E6CEF" />,
    name: "Products",
    count: "435323",
  },
  {
    id: 3,
    icon: <BiTargetLock size={35} color="#8E6CEF" />,
    name: "Sales",
    count: "23456",
  },
  {
    id: 4,
    icon: <AiOutlineRise size={35} color="#8E6CEF" />,
    name: "Sellers",
    count: "23456",
  },
];
