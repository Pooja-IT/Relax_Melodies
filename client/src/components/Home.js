// import Button from "../Button";
import Slider from './Slider';
import Map from './Map';
import Service from './Service';
import About from './About';
import Form from './Form';

export default function Home() {

    return(
        <>
            {/* <Button onClick={ () => {console.log("Click on More Sessions")}}>More Sessions</Button> */}
            <Slider />
            <About />
            <Service />
            <Form />
            <Map />
        </>
    )
}
