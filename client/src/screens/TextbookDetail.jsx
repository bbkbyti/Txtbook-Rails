import { useState, useEffect } from 'react';
import { getOneTextbook, deleteTextbook } from '../services/textbook';
import { useParams, useHistory, Link } from 'react-router-dom';


export default function TextbookDetail(props) {
    const [textbookDetail, setTextbookDetail] = useState(null)
    const { id } = useParams();
    const { currentUser } = props;
    const history = useHistory();

    useEffect(() => {
        const fetchTextbook = async () => {
            const itemDetail = await getOneTextbook(id)
            setTextbookDetail(itemDetail);
        }
        fetchTextbook();
    }, [id])

    const handleDelete = async () =>{
        const resp = await deleteTextbook(id)
        console.log(resp);
        history.push('/textbooks')

    }

    return (
        <div>
            {!currentUser ? (
                <div>
                    <img src={textbookDetail?.img_url} />
                    <div>{textbookDetail?.title}</div>
                    <div>{textbookDetail?.author}</div>
                    <div>{textbookDetail?.ISBN}</div>
                    <div>{textbookDetail?.category.name}</div>
                    <div>{textbookDetail?.price}</div>
                </div>
            ) : (
                <div>
                    <div>
                        <img src={textbookDetail?.img_url} />
                        <div>{textbookDetail?.title}</div>
                        <div>{textbookDetail?.author}</div>
                        <div>{textbookDetail?.ISBN}</div>
                        <div>{textbookDetail?.category.name}</div>
                        <div>{textbookDetail?.price}</div>
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to='/textbooks/:id/edit'>
                    <button>
                        Edit</button>
                    </Link>
                    
                </div>
            )}

        </div>
    )
}
