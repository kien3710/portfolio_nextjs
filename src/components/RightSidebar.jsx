import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
function RightSidebar() {
  return (
    <>
      <ul className="right_sidebar">
        <li>
          <Link href="#">
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link href="#">
            <BiUser />
          </Link>
        </li>
        <li>
          <Link href="#">
            <AiOutlineMail />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default RightSidebar;
