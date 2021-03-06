import { useState } from "react";
import { useSelector } from "react-redux";

import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import ProfileInfo from "./ProfileInfo";

const Nav = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const toggleDrawer = () => {
    toggleIsOpen((prev) => !prev);
  };

  const linksArray = ["locations", "ngos"];

  return (
    <>
      <nav
       style={{ 
          // borderBottom: '5px dotted #eee',
          // boxShadow: 'none',
          // backgroundColor: 'rgb(20,20,20)',
          // position: 'absolute',
          // top: '0px',
          // left: '0px',
          // right: '0px',
          // zIndex: '10',
          // height:' 78px',
      }}
      >
        <Mainbar {...{ toggleDrawer, linksArray, isLoggedIn }} style={{ 
          // zIndex: 1000,
        
        }}>
          <ProfileInfo isLoggedIn={isLoggedIn} />
        </Mainbar>
        <Sidebar {...{ toggleDrawer, isOpen, linksArray, isLoggedIn }}>
          <ProfileInfo isMobile isLoggedIn={isLoggedIn} />
        </Sidebar>
      </nav>
      <style jsx>{`
        nav * {
          align-items: center;
          background: linear-gradient(90deg, #3f774b, #2a324e) !important;
          display: block;
        }

        @media screen and (min-width: 1023px) {
          nav {
          }
        }
      `}</style>
      <style global jsx>{`
        .menu-button {
          display: block;
        }

        @media screen and (min-width: 1023px) {
          .menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
