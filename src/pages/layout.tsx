import { useEffect } from "react";
import { Outlet, useLocation } from "react-router"
import { NavBar } from "../components/common/nav-bar";
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/common/footer";

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <div>
            <NavBar />
            <Box overflowX="hidden" w="100vw">
                <Outlet />
            </Box>
            <Footer />
        </div>
    )
}

export default Layout