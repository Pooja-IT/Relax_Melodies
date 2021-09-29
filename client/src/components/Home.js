// import Button from "../Button";
import Slider from './Slider';
import Map from './Map';
import Body from './Body';
import About from './About';

export default function Home() {

    return(
        <>
            {/* <Button onClick={ () => {console.log("Click on More Sessions")}}>More Sessions</Button> */}
            <Slider />
            <About />
            <Body />
            <Map />
        </>
    )
}
