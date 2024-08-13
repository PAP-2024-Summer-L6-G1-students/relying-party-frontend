import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function MainLayout(props) {
    return (
        <>
            <Header pagetitle = {props.headerTitle}></Header>
            {props.children}
            <Footer></Footer>
        </>
    );
}