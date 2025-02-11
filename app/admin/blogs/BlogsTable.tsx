import dateFormat from "dateformat";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Blog } from "@/interfaces/Blog";
import DeleteButton from "./DeleteButton";

interface Props {
  blogs: Blog[];
}

const BlogsTable = ({ blogs }: Props) => {
  return (
    <Table className="max-h-[25vh] overflow-scroll">
      <TableHeader>
        <TableRow>
          <TableHead className="hidden sm:table-cell">Title</TableHead>
          <TableHead className="hidden sm:table-cell">Date Published</TableHead>
          <TableHead className="hidden sm:table-cell">Operations</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-auto">
        {blogs.map((blog) => (
          <TableRow key={blog.id} className="flex flex-col sm:table-row">
            <TableCell className="font-medium">{blog.title}</TableCell>
            <TableCell>
              {dateFormat(blog.createdAt, "dd mmmm, yyyy, h:MM TT")}
            </TableCell>
            <TableCell className="max-w-16">
              <div className="flex gap-2">
                <Link href={`/blog/${blog.id}`}>
                  <Button size={"sm"} variant={"outline"}>
                    Read
                  </Button>
                </Link>
                <Link href={`/admin/blogs/edit/${blog.id}`}>
                  <Button size={"sm"} className="bg-blue-600 hover:bg-blue-500">
                    Edit
                  </Button>
                </Link>
                <DeleteButton id={blog.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
