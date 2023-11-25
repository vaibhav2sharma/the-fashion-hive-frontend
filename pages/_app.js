import Footer from "@/components/Footer";
import Header from "@/components/Header";
import store from "@/store/store";
import "@/styles/globals.css";
import Head from "next/head";






import { Provider } from "react-redux";


export default function App({ Component, pageProps }) {
    return (
        <>

        <Head>

        <title>Fashion-Hive</title>







        </Head>
        
        <Provider store={store}>
            <Header/>

        
            <Component {...pageProps} />


            <Footer/>
        </Provider>





        </>
            
    );
}