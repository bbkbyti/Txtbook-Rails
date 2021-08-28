import { useState, useEffect } from "react";
import { getAllCategories } from "../services/categories";

import { Redirect } from "react-router-dom";
import { postTextbook } from "../services/textbook";

const TextbookCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [categories, setCategories] = useState([]);
 
  const [textbook, setTextbook] = useState({
    title: "",
    description: "",
    img_url: ""
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
    <>
      <form
       
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <input
         
          placeholder="title"
          value={textbook.name}
          name="title"
          required
        />
        <input
          className="mt"
          placeholder="Image Link"
          value={textbook.img_url}
          name="img_url"
        />
        <input
          className="mt-d"
          placeholder="description"
          value={textbook.description}
          name="description"
          required
        />
        <select name="category_id">
          <option default hidden required>
            select the Categories
          </option>
          {categories &&
            categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
        </select>

        <button type="submit" className="create-button">
          ADD
        </button>
      </form>
    </>
  );
};

export default TextbookCreate;