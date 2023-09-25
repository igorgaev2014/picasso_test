import { useGetPostsQuery } from "../shared/api/api";
import { Routing } from "../pages";
import { withProviders } from "./providers";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetPostsQuery(page);
  const items = data ?? [];

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className="App">
      <Routing items={items} />
    </div>
  );
}

export default withProviders(App);
