import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
function Sidebar() {
  return (
    <>
      <>
        <div className="left_sidebar">
          <div className="icon_setting">
            <i className="fa-light fa-gear" />
          </div>
          <div className="header_sidebar">
            <span className="name">Logo</span>
            <span className="position">Framer Designer & Developer</span>
          </div>
          <>
            <div className="body_sidebar">
              <div className="img">
                <Image src="" alt="Picture of the author" />
              </div>
              <div className="name">
                <div className="mail"></div>
                <div className="address"></div>
              </div>
              <div className="copyRight">© 2022 Drake. All Rights Reserved</div>
              <ul className="socials">
                <li>
                  <Link href="/" target="_blank">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <BsTwitter />
                  </Link>
                </li>
              </ul>
              <div className="btn_sidebar">
                <Link href="#">
                  <i className="fa-regular fa-envelope" />
                  HIRE ME!
                </Link>
              </div>
            </div>
          </>
        </div>
      </>
    </>
  );
}

export default Sidebar;
