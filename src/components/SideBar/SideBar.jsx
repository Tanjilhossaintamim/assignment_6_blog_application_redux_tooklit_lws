import { useState } from "react";
import FilterPart from "./FilterPart";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

const SideBar = () => {
  const [sortValue, setSortValue] = useState("");
  const dispatch = useDispatch();
  const handelSelectValue = (e) => {
    setSortValue(e.target.value);
    dispatch(fetchBlogs({ name: "", sortValue:e.target.value }));
  };
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            value={sortValue}
            onChange={handelSelectValue}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <FilterPart />
      </div>
    </aside>
  );
};

export default SideBar;
