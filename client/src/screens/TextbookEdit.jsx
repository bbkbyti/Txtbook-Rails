
import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/categories";
import { getOneTextbook, putTextbook } from "../services/textbook";

const TextbookEdit = (props) => {
const [categories, setCategories] = useState([]);

const [textbook, setTextbook] = useState({

    title: "",
    description: "",
    img_url: ""
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchTextbook = async () => {
      const textbook= await getOneTextbook(id);
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
    <>
    <form
      className="flex "
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <input
   
        placeholder="title"
        value={textbook.title}
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
          select the Category
        </option>
        {categories &&
          categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
      </select>
      <button type="submit">
        EDIT
      </button>
    </form>
  </>
  );
};

export default TextbookEdit;