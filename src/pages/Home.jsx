
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function Home() {
    return(
        <div className="container main-layout">
            <Header className = "layout-header"/>
            <ProductList className = "layout-content"/>
            <Footer className = "layout-footer"/>
        </div>

    );
}
export default Home;