import { useState, useEffect } from "react";
import { getAllTextbooks } from "../services/textbook";
import Textbook from "../components/Textbook";

export default function TextbooksList(props) {
  const { textbookList, handleDelete } = props;
  console.log(textbookList);
  console.log(handleDelete);
  const [textbooks, setTextbooks] = useState([]);
  useEffect(() => {
    const fetchTextbooks = async () => {
      const allTextbooks = await getAllTextbooks();
      setTextbooks(allTextbooks);
    };
    fetchTextbooks();
  }, []);

  return (
    <div>
      <div >
        {textbooks.map((textbook, index) => {
          return (
            <div key={index}>
              <Textbook textbook={textbook} />
            </div>
          );
        })}
      </div>
    </div>
  );
}