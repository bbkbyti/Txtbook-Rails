
import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/categories";
import { getOneTextbook, putTextbook } from "../services/textbook";

const TextbookEdit = (props) => {
  const [categories, setCategories] = useState([]);

  const [textbook, setTextbook] = useState({
    title: '',
    author: '',
    img_url: '',
    edition: '',
    ISBN: '',
    price: ''
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchTextbook = async () => {
      const textbook = await getOneTextbook(id);
      setTextbook(textbook);
    };
    fetchTextbook();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextbook({
      ...textbook,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchDropDowns = async () => {
      const categories = await getAllCategories();

      setCategories(categories);

    };
    fetchDropDowns();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putTextbook(id, textbook);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/textbooks/${id}`} />;
  }

  return (
    <div className='min-h-screen font-serif flex justify-center bg-blue-50' >
      <div className='mt-16 rounded-2xl py-10 mb-32  shadow-2xl px-20 bg-white' >
        <form
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <h3 className='text-3xl text-gray-700 p-8 mb-4 font-bold'>
            Edit Textbook</h3>
          <div className='flex flex-col'>
            <input className='my-6 py-3 border-4 rounded-xl border-blue-200'
              value={textbook.title}
              name="title"
              required
            />
            <input className='my-6 py-3 border-4 rounded-xl border-blue-200'
              value={textbook.img_url}
              name="img_url"
            />
            <input className='my-6 py-3 border-4 rounded-xl border-blue-200'
              value={textbook.edition}
              name="edition"
              required
            />
            <input className='my-6 py-3 border-4 rounded-xl border-blue-200'
              value={textbook.ISBN}
              name="ISBN"
              required
            />
            <input className='my-6 py-3 border-4 rounded-xl border-blue-200'
              value={textbook.price}
              name="price"
              required
            />

            <select className=' my-6 py-3 border-4 rounded-xl border-blue-200' name="category_id">
              <option default hidden required>
                Select Category
              </option>
              {categories &&
                categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
            </select>
            <button className='bg-yellow-400 text-blue-900 font-bold text-xl mt-8 py-2 px-16 rounded-xl hover:bg-yellow-500'
              type="submit">
              EDIT
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default TextbookEdit;