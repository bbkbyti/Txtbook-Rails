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
    return (
        <div className=" lg:font-serif lg:grid lg:grid-cols-3 lg:min-h-screen lg:bg-blue-50 flex flex-col justify-evenly min-h-screen font-serif">
            <div className="flex justify-center w-7/12 items-center ml-20 ">
                <img
                    src={textbook.img_url}
                    alt={textbook.title}
                />
            </div>

            <div className=" lg:flex lg:flex-col lg:justify-center lg:pr-40 lg:text-2xl lg:font-bold  flex flex-col px-7">

                <div className="lg:bg-blue-100 lg:font-extrabold lg:mb-1 bg-gray-200 my-1 rounded-xl py-2 font-extrabold">Title: {textbook.title}</div>

                <div className="lg:bg-blue-100 lg:mb-1 bg-gray-200 my-1 rounded-xl py-2 px-3 font-bold">Author(s): {textbook.author}</div>

                <div className="lg:bg-blue-100 lg:mb-1 bg-gray-200 my-1 rounded-xl py-2 font-bold">Edition: {textbook.edition}</div>

                <div className="lg:bg-blue-100 lg:mb-1 bg-gray-200 my-1 rounded-xl py-2 font-bold">ISBN: {textbook.ISBN}</div>

                <div className="lg:bg-blue-100 lg:mb-1 bg-gray-200 my-1 rounded-xl py-2 font-bold">Category: {textbook.category.name}</div>

                <div className="lg:bg-blue-100 bg-gray-200 my-1 rounded-xl py-2 font-bold">Price: ${textbook.price}</div>

            </div>


            <div className="lg:flex lg:flex-col lg:justify-center flex justify-evenly">
                <Link to={`/textbooks/${textbook.id}/edit`}>
                    <button className=" lg:font-bold lg:px-16 lg:p-6 lg:bg-green-400 lg:hover:bg-green-600 lg:text-3xl lg:text-white  bg-green-400 hover:bg-green-600 my-2 py-2 px-6 text-white font-bold rounded-lg">Edit</button>
                </Link>
                {currentUser ? <button onClick={handleDelete} className=" lg:font-bold lg:m-2 lg:mx-36 lg:p-6  lg:bg-red-400 lg:hover:bg-red-600 lg:text-3xl lg:text-white bg-red-400 hover:bg-red-600 my-2 py-2 px-3 text-white font-bold rounded-lg ">
                    Delete
                </button> : <Link to="/login"> Delete </Link>}
            </div>


        </div>
    );
};

export default BooksDetail;