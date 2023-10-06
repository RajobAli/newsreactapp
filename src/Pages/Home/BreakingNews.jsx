
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={50}>
                <Link className="mr-12 bg-green-200" to="/">Rajob Ali ...</Link>
                <Link className="mr-12 text-red-500" to="/">This is the go of the world...</Link>
                <Link className="mr-12" to="/">Bangladesh...</Link>
                <Link className="mr-12" to="/">Bangladesh is an independent country...</Link>
            
            </Marquee>

        </div>
    );
};

export default BreakingNews;