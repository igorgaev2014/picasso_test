import PostsItem from "../../entities/postsItem";

const PostsListPage = ({ items }) => {
  return (
    <div className="postslist">
      {items.map((item, i) => (
        <PostsItem item={item} i={i} />
      ))}
    </div>
  );
};

export default PostsListPage;
