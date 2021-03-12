import Footer from "./Footer"
import NavBar from "./NavBar/NavBar"

const Layout = ({ children }) => {
    return (
        <div className="page">
            <NavBar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;