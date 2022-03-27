import "./Home.css";
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className="home">
            <div class="grid-2 grip-space">
                <div class="grid-item grid-box left-side">
                    <div className="home-details flex-col">
                      <h1 className="top-gutter-lg">PALETTE NOTES</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reiciendis iusto odio reprehenderit alias vel optio adipisci voluptates qui ad dignissimos magni? Quam magnam architecto consequatur cupiditate aspernatur perspiciatis, molestiae earum veniam?</p>
                      <Link to="/notes" className="home-btn top-gutter-md">Lets Start!</Link>
                    </div>
                </div>
                <div class="grid-item grid-box right-side">
                    <img src="https://res.cloudinary.com/dgomw715r/image/upload/v1648276056/ProjectImages/notesbg_cj9n5b.png" />
                </div>
            </div>
        </div>
    )
}

export { Home };