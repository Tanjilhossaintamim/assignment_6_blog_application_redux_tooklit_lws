import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

const FilterPart = () => {
  const [radio, setRadio] = useState("all");
  const dispatch = useDispatch();
  const handelChangeRadioButton = (name) => {
    setRadio(name);
    dispatch(fetchBlogs({ name, sortValue: "" }));
  };
  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        {/* <!-- handle filter on button click --> */}
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            checked={radio == "all"}
            className="radio"
            onChange={() => handelChangeRadioButton("all")}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            checked={radio == "saved"}
            onChange={() => handelChangeRadioButton("saved")}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default FilterPart;
