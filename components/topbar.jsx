import React from "react";
import constants from "../helper/constants";
import Link from "next/link";

// topbar component
const Topbar = () => {
  // return jsx
  return (
    <div className="topbar">
      <div className="inner-topbar">
        <Link href="#" className="logo">
          <img src="../images/logo.png" alt="" />
        </Link>

        <ul className="topbar-socialmedia">
          {constants?.socialMediaLinks?.map((link, index) => (
            <li key={index}>
              <Link href="#">
                <img src={link.src} alt={link.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// export component
export default Topbar;
