import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNab = () => {

    const [categories,setCatagories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data =>setCatagories(data))

    },[])
    return (
        <div className="space-y-4">
            <h2 className="text-3xl">All Categories :{categories.length}</h2>
            {
                categories.map(category =><Link className="block ml-4 text-xl font-bold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
            
        </div>
    );
};

export default LeftSideNab;