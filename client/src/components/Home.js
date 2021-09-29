import Button from "../Button"

export default function Home() {

    return(
        <div>
            <Button onClick={ () => {console.log("Click on More Sessions")}}>More Sessions</Button>
        </div>
    )
}
