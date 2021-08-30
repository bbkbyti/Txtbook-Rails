import { Link } from "react-router-dom";
const Textbook = (props) => {
    
    return (
        <>
            <Link to={`/textbooks/${props.id}`}>
                <h2>{props.title}</h2>
                <img src={props.img_url} alt={props.title} />
            </Link>
        </>
    );
};
export default Textbook;
