import { useState, useEffect } from 'react';
import { getOneTextbook } from '../services/textbook';
import { useParams } from 'react-router-dom';


export default function TextbookDetail(props) {
    const [textbookDetail, setTextbookDetail] = useState(null)
    const { id } = useParams();
    const { currentUser } = props;

    useEffect(() => {
        const fetchTextbook = async () => {
            const itemDetail = await getOneTextbook(id)
            setTextbookDetail(itemDetail);
        }
        fetchTextbook();
    }, [id])

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
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            )}

        </div>
    )
}
