import { Link } from "react-router-dom";
const Textbook = (props) => {
    
    return (
        <div className='flex flex-col justify-center items-center my-6' >
        <div className='flex flex-col justify-center'>
            <Link to={`/textbooks/${props.id}`}>
                <img className='shadow-2xl rounded-3xl w-40 h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ' 
                src={props.img_url} alt={props.title} />
            </Link>
        </div>
        <div className=' lg:mx-20 lg:mb-9 lg:mt-3 lg:bg-blue-200 lg:rounded-full lg:shadow-2xl bg-blue-200 rounded-full my-2'>
        <p className='lg:text-xl lg:font-bold lg:italic lg:font-serif lg:text-blue-900 lg:mx-6 lg:py-6 font-bold px-4 py-3'>
            {props.title}</p>
        </div>
        

        </div>

    );
};
export default Textbook;
