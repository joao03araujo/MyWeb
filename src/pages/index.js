import Header from "../components/header/body";
import Body from "../components/body/body";
import Footer from "../components/footer/body";

const IndexPage = () => {

    return(
        <div>
            <Header/>
            <div className="container-fluid">
             <Body/>
             <Footer/>
            </div>
        </div>
    );

};

export default IndexPage;