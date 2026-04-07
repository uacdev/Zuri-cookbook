import { useEffect } from "react";
import { Outlet, useLocation } from "react-router"
import { NavBar } from "../components/common/nav-bar";
import { Footer } from "../components/common/footer";

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout