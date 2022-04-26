import HomeContent from "./Components/HomeContent";
import NavBar from "./Components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="homeContainer">
                <HomeContent />
            </div>
        </>
    )
}