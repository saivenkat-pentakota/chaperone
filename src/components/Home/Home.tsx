import Navbar from "../Navbar/Navbar";
import Promotion from "../Promotion/Promotion";
import Searchbar from "../Searchbar/Searchbar";

export default function Home(){
    return (
        <>
            <Promotion />
            <Navbar/>
            <Searchbar/>
        </>
    );
}