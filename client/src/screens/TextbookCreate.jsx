import { useState, useEffect } from "react";
import { getAllCategories } from "../services/categories";

import { Redirect } from "react-router-dom";
import { postTextbook } from "../services/textbook";

const TextbookCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [categories, setCategories] = useState([]);

  const [textbook, setTextbook] = useState({
    title: "",
    author: "",
    img_url: "",
    ISBN: '',
    price: ''
  });

  useEffect(() => {
    const fetchDropDowns = async () => {
      const categories = await getAllCategories();

      setCategories(categories);

    };
    fetchDropDowns();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextbook({
      ...textbook,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newTextbook = textbook;
    if (!textbook.img_url) {
      newTextbook = {
        ...newTextbook,
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
      };
    }
    const created = await postTextbook(newTextbook);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/textbooks`} />;
  }
  return (
    <div className='min-h-screen font-serif flex justify-center bg-blue-50'>
      <div className='mt-16 rounded-2xl py-10 mb-32  shadow-2xl px-20 bg-white' >
        <form
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <h3 className='text-3xl text-gray-700 p-8 mb-4 font-bold'>
            Add Your Textbook</h3>
          <div className='flex flex-col ' >
            <input className='my-6 py-3  border-4 rounded-xl border-blue-200 '
              placeholder="  Title"
              value={textbook.title}
              name="title"
              required
            />
            <input
              className="my-6 py-3 border-4 rounded-xl border-blue-200"
              placeholder="  Author"
              value={textbook.author}
              name="author"
            />
            <input
              className="my-6 py-3 border-4 rounded-xl border-blue-200"
              placeholder="  Image link"
              value={textbook.img_url}
              name="img_url"
              required
            />
            <input
              className="my-6 py-3 border-4 rounded-xl border-blue-200"
              placeholder="  ISBN"
              value={textbook.ISBN}
              name="ISBN"
              required
            />
            <input
              className="my-6 py-3 border-4 rounded-xl border-blue-200"
              placeholder="  Price"
              value={textbook.price}
              name="price"
              required
            />
            <select className="my-6 py-3 border-4 rounded-xl border-blue-200"
              name="category_id">
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
              ADD
            </button>
          </div>

        </form>
      </div>


    </div>
  );
};

export default TextbookCreate;