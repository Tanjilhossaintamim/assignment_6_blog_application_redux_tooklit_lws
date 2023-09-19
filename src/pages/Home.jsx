import Blogs from "../components/Blogs/Blogs";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  return (
    <section className="wrapper">
      <SideBar />

      <Blogs />
    </section>
  );
};

export default Home;
