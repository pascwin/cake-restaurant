import React, { Fragment, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { GlobalStyles, Primary } from "./Layout.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OverlayMenu from "../OverlayMenu/OverlayMenu";

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOverlayMenu = () => {
        setMenuOpen(prev => !prev)
    }
    return (
        <Fragment>
            <GlobalStyles />
            <Hamburger handleOverlayMenu={handleOverlayMenu} />
            <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu}/>
            <Header />
            <Primary>
                {children}
            </Primary>
            <Footer />
        </Fragment>
    )
}

export default Layout;