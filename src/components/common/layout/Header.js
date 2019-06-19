import React from "react";

import NavBar from "../NavBar";

const Header = () => (
    <>
        <header
            className={`bb b--whitegrey fixed bg-white top-0 left-0 z-500 right-0 mb10`}>
            <NavBar theme="dark" />
        </header>
        <div className="h17" />{" "}
        {/* We need to push down all the content because of the fixed header */}
    </>
);

export default Header;
