import { useState } from "react";
import { Link } from "react-router-dom";
import limitChar from "./features/limitChar";

const PostsItem = ({ item, i }) => {
  const [extraInfo, setExtraInfo] = useState(false);
  const limitCharLength = 60;

  return (
    <div key={i}>
      <h3>
        {item.id}. {item.title}
      </h3>
      <p>{extraInfo ? item.body : limitChar(item.body, limitCharLength)}</p>
      <Link to={`/${item.id}`} onClick={() => setExtraInfo(true)}>
        Просмотр
      </Link>
    </div>
  );
};

export default PostsItem;
