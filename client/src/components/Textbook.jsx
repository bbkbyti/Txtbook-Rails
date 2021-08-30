import { Link } from "react-router-dom";
const Textbook = (props) => {
    
    return (
        <div className='flex flex-col justify-center items-center my-6' >
        <div className='flex flex-col justify-center'>
            <Link to={`/textbooks/${props.id}`}>
                <img className=' shadow-2xl rounded-3xl w-40 h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ' 
                src={props.img_url} alt={props.title} />
            </Link>
        </div>
        <div className=' mx-20 mb-9 mt-3 bg-blue-200 rounded-full shadow-2xl'>
        <p className='text-xl font-bold italic font-serif text-blue-900 mx-6 py-6'>
            {props.title}</p>
        </div>
        

        </div>

    );
};
export default Textbook;
