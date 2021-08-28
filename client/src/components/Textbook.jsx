import { Link } from "react-router-dom";
const Textbook = ({ textbook }) => {
    const { id, img_url, title, ISBN } = textbook
    return (
        <div >
            <Link to={`/textbooks/${id}`}>
                    <h2>{title}</h2>
                <img src={img_url} alt={title} />
                <p>{ISBN}</p>
            </Link>
        </div>
    );
};
export default Textbook;
