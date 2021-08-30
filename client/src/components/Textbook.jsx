import { Link } from "react-router-dom";
const Textbook = (props) => {
    
    return (
        <div className='flex flex-col justify-center items-center' >
        <p className='text-xl'>{props.title}</p>
        <div className='flex flex-col justify-center'>
            <Link to={`/textbooks/${props.id}`}>
                <img className='w-40 h-full object-cover' src={props.img_url} alt={props.title} />
            </Link>
        </div>

    </div>

    );
};
export default Textbook;
