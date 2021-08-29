import { Link } from "react-router-dom";
const Textbook = (props) => {
    
    return (
        <div  className='min-h-screen grid grid-cols-3'>
            
                <div>
                <h2>{props.title}</h2>
                <Link to={`/textbooks/${props.id}`}>
                <img src={props.img_url} alt={props.title} />
                </Link>
                </div>
            
        </div>
    );
};
export default Textbook;
