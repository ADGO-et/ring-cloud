import BlogForm from "../BlogForm";

const NewPostPage = () => {
  return (
    <div className="flex flex-col my-10 gap-5">
      <h1 className="text-2xl font-bold text-primaryColor">Add Blog</h1>
      <BlogForm />
    </div>
  );
};

export default NewPostPage;
