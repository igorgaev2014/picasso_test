import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PostDetailsPage = ({ items }) => {
  const params = useParams();
  const id = Number(params.id);

  const item = items[id - 1];

  if (!item) {
    return (
      <div>
        <p>404 not found</p>
        <Link to="/">Назад</Link>
      </div>
    );
  }

  return (
    <div>
      <h3>
        {item.id}. {item.title}
      </h3>
      <p>{item.body}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default PostDetailsPage;
