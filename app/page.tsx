import Header from "@/components/Header";
import List from "@/modules/PostList/List";
import IndexMain from "@/modules/createPost/IndexMain";
const page = () => {
  return (
    <div className="main__container flex justify-start items-center flex-col">
      <Header/>
      <IndexMain/>
      <List/>
    </div>
  );
};

export default page;
