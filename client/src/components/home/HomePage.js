import Button from "../Button"

export default function HomePage() {

    return(
        <div>
            <h3>Welcome to our page!</h3>
            <Button onClick={ () => {console.log("Click on Subscribe")}}>Subscribe</Button>
            <Button onClick={ () => {console.log("Click on More Sessions")}}>More Sessions</Button>
            
        </div>
    )
}

