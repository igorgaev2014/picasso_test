import { Route, Routes } from "react-router-dom";
import PostsListPage from "./postsList";
import PostDetailsPage from "./postDetails";

export const Routing = ({ items }) => {
  return (
    <Routes>
      <Route path="/" element={<PostsListPage items={items} />} />
      <Route path="/:id" element={<PostDetailsPage items={items} />} />
    </Routes>
  );
};
