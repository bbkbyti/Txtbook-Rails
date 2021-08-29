import { Link } from "react-router-dom";
const Textbook = (props) => {
    
    return (
        <div>
            
                <div className=''>
                <h2>{props.title}</h2>
                <Link to={`/textbooks/${props.id}`}>
                <img className='w-5/12' src={props.img_url} alt={props.title} />
                </Link>
                </div>
            
        </div>
    );
};
export default Textbook;
