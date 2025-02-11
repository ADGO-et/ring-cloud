import BlogsTable from "./BlogsTable";
import { Blog } from "@/interfaces/Blog";

interface FetchBlogs {
  blogs: Blog[];
}

const AdminBlogsPage = async () => {
  let blogs: Blog[];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      cache: "no-cache",
    });
    const body: FetchBlogs = await res.json();
    blogs = body.blogs;
  } catch (error) {
    blogs = [];
  }

  return (
    <main className="py-9">
      <h1 className="text-primaryColor font-bold text-2xl pb-6">Blogs</h1>

      {!blogs || blogs.length == 0 ? (
        <p className="pt-9 text-muted-foreground text-center">
          -- No blogs found to show --
        </p>
      ) : (
        <BlogsTable blogs={blogs} />
      )}
    </main>
  );
};

export default AdminBlogsPage;
