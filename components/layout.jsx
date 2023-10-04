import React from "react";

// layout component
const Layout = (props) => {
  return (
    <>
      <div className="allpages">{props.children}</div>
    </>
  );
};

// export layout
export default Layout;
