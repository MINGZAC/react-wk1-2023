
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { useImages } from "../react-query";

function Home() {

    const { data, isLoading } = useImages();
    const images = data || [];

    return(
        <div className="container main-layout">
            <Header 
                className="layout-header"
                titie="photoweb"
                slogan="Victor's Web"
            />
            <ProductList
                className = "layout-content"
                images={images}
                isLoading={isLoading}

            />
            <Footer className = "layout-footer"/>
        </div>

    );
}
export default Home;




