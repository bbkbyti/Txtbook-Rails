import { useState, useEffect } from "react";
import { getOneTextbook, deleteTextbook } from "../services/textbook";
import { useParams, Link } from "react-router-dom";
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
        <>
            <div>
                <div>{textbook.title}</div>
                <img
                    src={textbook.img_url}
                    alt={textbook.title}
                />
                <div>
                    <div>
                        <div>Author: {textbook.author}</div>
                        <div>Edition: {textbook.edition}</div>
                        <div>ISBN: {textbook.ISBN}</div>
                        <div>Category: {textbook.category.name}</div>
                        <div>Price: ${textbook.price}</div>
                    </div>
                    <div>
                        <Link to={`/textbooks/${textbook.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BooksDetail;