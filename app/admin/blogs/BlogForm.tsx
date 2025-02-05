"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Spinner from "@/components/Spinner";
import { Blog } from "@/interfaces/Blog";
import { useRouter } from "next/navigation";

interface CloudinaryResult {
  public_id: string;
  secure_url: string; // Add this to access the URL directly
}

interface Props {
  blog?: Blog;
  isEditing?: boolean;
}

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  thumbnail: z.string().optional(), // Updated to include a validation message
  thumbnailPublicId: z.string().optional(),
  contents: z
    .array(
      z.object({
        id: z.number().min(1).optional(),
        type: z.enum(["heading", "paragraph", "image", "youtube"]),
        value: z.string().min(1, "Content value is required"),
      })
    )
    .min(1, "Contents can't be empty")
    .refine(
      (contents) =>
        contents.some((c) => c.type === "heading" && c.value.trim() !== ""),
      "At least one heading is required and must not be empty."
    )
    .refine(
      (contents) =>
        contents.some((c) => c.type === "paragraph" && c.value.trim() !== ""),
      "At least one paragraph is required and must not be empty."
    ),
});

type FormValues = z.infer<typeof formSchema>;

const BlogForm = ({ blog, isEditing }: Props) => {
  const [publicId, setPublicId] = useState<string | null>(
    blog?.thumbnailPublicId || null
  );
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(
    blog?.thumbnail || null
  );
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog?.title || "",
      description: blog?.description || "",
      category: blog?.category || "",
      thumbnail: blog?.thumbnail || "",
      thumbnailPublicId: blog?.thumbnailPublicId || "",
      contents: blog?.content || [],
    },
  });

  const addContent = (type: "heading" | "paragraph" | "image" | "youtube") => {
    const contents = form.getValues("contents") || [];
    form.setValue("contents", [
      ...contents,
      { id: undefined, type, value: "" },
    ]);
  };

  const updateContent = <T extends "type" | "value">(
    index: number,
    key: T,
    value: T extends "type"
      ? "heading" | "paragraph" | "image" | "youtube"
      : string
  ) => {
    const contents = form.getValues("contents") as Array<{
      id?: number;
      type: "heading" | "paragraph" | "image" | "youtube";
      value: string;
    }>;

    if (contents[index]) {
      contents[index][key] = value as any;
      form.setValue("contents", contents);
    }
  };

  const removeContent = (index: number) => {
    const contents = form.getValues("contents") || [];
    contents.splice(index, 1);
    form.setValue("contents", contents);
  };

  const onSubmit = async (values: FormValues) => {
    try {
      setUploading(true);

      const authToken = localStorage.getItem("authToken");

      const response = await fetch(
        isEditing ? `/api/blogs/${blog?.id}` : "/api/blogs/",
        {
          method: isEditing ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            content: values.contents,
            description: values.description,
            category: values.category,
            thumbnail: values.thumbnail,
            thumbnailPublicId: values.thumbnailPublicId,
            title: values.title,
          }),
        }
      );

      const body = await response.json();

      if (!body.success) setError(body.error);
      else {
        setMessage(
          isEditing ? "Blog updated successfully." : "Blog added successfully."
        );
        handleReset();
      }
      setUploading(false);
      handleReset();
    } catch (error) {
      setError(
        `There was an error when trying to ${
          isEditing ? "edit" : "add"
        } a blog.`
      );
      setUploading(false);
    }
  };

  const handleReset = () => {
    form.reset({
      title: blog?.title || "",
      description: blog?.description || "",
      category: blog?.category || "",
      thumbnail: blog?.thumbnail || "",
      thumbnailPublicId: blog?.thumbnailPublicId || "",
      contents: blog?.content || [],
    });

    // Reset related states
    setPublicId(blog?.thumbnailPublicId || null);
    setThumbnailUrl(blog?.thumbnail || null);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Form {...form}>
      {message && (
        <Alert variant="default" className="bg-green-400/10">
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      {error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Blog title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Blog description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category Field */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Blog category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Dynamic Contents */}
          <div>
            <FormLabel>Contents</FormLabel>
            {form.formState.errors.contents && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.contents.message}
              </p>
            )}
            {form.watch("contents")?.map((content, index) => (
              <div key={index} className="content-item mt-4">
                <div className="flex flex-col space-y-2">
                  <Select
                    value={content.type}
                    onValueChange={(
                      value: "heading" | "paragraph" | "image" | "youtube"
                    ) => updateContent(index, "type", value)}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="heading">Heading</SelectItem>
                      <SelectItem value="paragraph">Paragraph</SelectItem>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                    </SelectContent>
                  </Select>

                  {content.type === "image" ? (
                    <>
                      {/* Show the existing image */}
                      {isEditing && content.value && (
                        <CldImage
                          src={content.value.split("/").slice(-2).join("/")}
                          width={300}
                          height={200}
                          alt={`Content Image ${index}`}
                        />
                      )}
                      {/* Cloudinary Upload Widget */}
                      <CldUploadWidget
                        options={{
                          multiple: false,
                          clientAllowedFormats: ["jpeg", "png", "jpg", "gif"],
                        }}
                        uploadPreset={
                          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                        }
                        onSuccess={(result, widget) => {
                          if (result.event === "success") {
                            const info = result.info as CloudinaryResult;
                            updateContent(index, "value", info.secure_url); // Store secure_url
                          }
                        }}
                      >
                        {({ open }) => (
                          <>
                            {!isEditing && content.value ? (
                              <CldImage
                                src={content.value
                                  .split("/")
                                  .slice(-2)
                                  .join("/")} // Derive public_id from secure_url
                                width={270}
                                height={180}
                                alt="Uploaded image"
                                className="rounded-md"
                              />
                            ) : (
                              <Button
                                type={"button"}
                                className="w-24 bg-blue-600 hover:bg-blue-500"
                                onClick={() => open()}
                              >
                                Upload
                              </Button>
                            )}
                          </>
                        )}
                      </CldUploadWidget>
                    </>
                  ) : (
                    <Input
                      placeholder={`Enter ${content.type} value`}
                      value={content.value}
                      onChange={(e) =>
                        updateContent(
                          index,
                          "value",
                          e.target.value as
                            | "heading"
                            | "paragraph"
                            | "image"
                            | "youtube"
                        )
                      }
                      className={content.type === "paragraph" ? "h-20" : ""}
                    />
                  )}
                </div>

                <Button
                  type="button"
                  onClick={() => removeContent(index)}
                  variant="destructive"
                  className="mt-2 w-24"
                >
                  Remove
                </Button>
              </div>
            ))}

            <div className="mt-4 space-x-2">
              <Button
                type="button"
                onClick={() => addContent("heading")}
                variant="secondary"
                className="hover:bg-gray-200"
              >
                Add Heading
              </Button>
              <Button
                type="button"
                onClick={() => addContent("paragraph")}
                variant="secondary"
                className="hover:bg-gray-200"
              >
                Add Paragraph
              </Button>
              <Button
                type="button"
                onClick={() => addContent("image")}
                variant="secondary"
                className="hover:bg-gray-200"
              >
                Add Image
              </Button>
              <Button
                type="button"
                onClick={() => addContent("youtube")}
                variant="secondary"
                className="hover:bg-gray-200"
              >
                Add YouTube
              </Button>
            </div>
          </div>

          {/* Thumbnail */}
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  {/* Upload Widget */}
                  {!thumbnailUrl && (
                    <CldUploadWidget
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                      }
                      options={{
                        multiple: false,
                        clientAllowedFormats: ["jpeg", "png", "jpg", "gif"],
                      }}
                      onSuccess={(result, widget) => {
                        if (result.event === "success") {
                          const info = result.info as CloudinaryResult;
                          setPublicId(info.public_id);
                          setThumbnailUrl(info.secure_url); // Set the thumbnail URL
                          form.setValue("thumbnail", info.secure_url); // Populate the form schema with the URL
                          form.setValue("thumbnailPublicId", info.public_id);
                        }
                      }}
                    >
                      {({ open }) => (
                        <Button
                          type={"button"}
                          className="w-24 bg-blue-600 hover:bg-blue-500"
                          {...field}
                          onClick={() => open()}
                        >
                          Upload
                        </Button>
                      )}
                    </CldUploadWidget>
                  )}
                </FormControl>
                <FormMessage />

                {publicId && (
                  <>
                    {/* Thumbnail Preview */}
                    <div className="mt-4">
                      <CldImage
                        src={publicId}
                        width={270}
                        height={180}
                        alt="thumbnail"
                      />
                    </div>
                    {/* Remove Thumbnail Button */}
                    <Button
                      type="button"
                      className="px-2 max-w-36"
                      onClick={() => {
                        setThumbnailUrl(null);
                        setPublicId(null);
                        form.setValue("thumbnail", ""); // Clear the form value
                        form.setValue("thumbnailPublicId", ""); // Clear the public ID
                      }}
                      variant="destructive"
                    >
                      Remove Thumbnail
                    </Button>
                  </>
                )}
              </FormItem>
            )}
          />

          <div className="flex gap-4 justify-between border-t-[1px] py-3">
            <Button
              type="submit"
              variant={"outline"}
              className="w-24 bg-[#003366] text-white hover:bg-[#1e4e7e] hover:text-white"
            >
              {uploading ? (
                <Spinner spin={true} />
              ) : isEditing ? (
                "Edit Blog"
              ) : (
                "Add Blog"
              )}
            </Button>
            <div className="flex gap-4">
              <Button
                type="button"
                onClick={handleCancel}
                variant="secondary"
                className="w-24 bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleReset}
                variant="secondary"
                className="w-24 bg-gray-200 hover:bg-gray-300"
              >
                Reset
              </Button>
            </div>
          </div>
          {/* Submit Button */}
        </form>
      )}
    </Form>
  );
};

export default BlogForm;
