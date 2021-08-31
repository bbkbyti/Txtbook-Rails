import { useState, useEffect } from "react";
import { getOneTextbook, deleteTextbook } from "../services/textbook";
import { useParams, Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const BooksDetail = (props) => {
    const [textbook, setTextbooks] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const { currentUser } = props

    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        const fetchTextbook = async () => {
            const textbook = await getOneTextbook(id);
            setTextbooks(textbook);
            setLoaded(true);
        };
        fetchTextbook();
    }, [id]);

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    const handleDelete = async () => {
        const resp = await deleteTextbook(id)
        console.log(resp)
        history.push('/textbooks')
    }
    console.log(textbook);
    return (
        <div className="grid grid-cols-3 min-h-screen bg-blue-50 ">
            <div className="mt-20">
                <img
                    src={textbook.img_url}
                    alt={textbook.title}
                />
                </div>
                
                    <div className="lg:flex lg:flex-col lg:justify-center lg:pr-40 text-2xl font-bold mb-32 ">

                        <div className="bg-blue-100 mb-1">Title: {textbook.title}</div>
                        
                        <div className="bg-blue-100 mb-1">Author: {textbook.author}</div>
                        
                        <div className="bg-blue-100 mb-1">Edition: {textbook.edition}</div>
                        
                        <div className="bg-blue-100 mb-1">ISBN: {textbook.ISBN}</div>
                        
                        <div className="bg-blue-100 mb-1">Category: {textbook.category.name}</div>
                        
                        <div className="bg-blue-100">Price: ${textbook.price}</div>
                        
                     </div>
                
                    
                    <div className="flex flex-col justify-center mb-44">
                        <Link to={`/textbooks/${textbook.id}/edit`}>
                            <button className="px-48 p-6  bg-blue-600 text-3xl text-white">Edit</button>
                        </Link>
                        {currentUser ? <button onClick={handleDelete} className=" m-2 mx-6 p-6 bg-red-500 text-3xl text-white ">
                            Delete
                        </button> : <Link to="/login"> Delete </Link>}
                    </div>
                
            
        </div>
    );
};

export default BooksDetail;