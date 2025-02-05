type ContentType = "heading" | "paragraph" | "image" | "youtube";

interface BaseContent {
  type: ContentType;
  value: string;
  id?: number;
}

interface HeadingContent extends BaseContent {
  type: "heading";
}

interface ParagraphContent extends BaseContent {
  type: "paragraph";
}

interface ImageContent extends BaseContent {
  type: "image";
  // Image URL
}

interface YouTubeContent extends BaseContent {
  type: "youtube";
}

type BlogContent =
  | HeadingContent
  | ParagraphContent
  | ImageContent
  | YouTubeContent;

export interface Blog {
  id: number;
  createdAt: Date;
  description: string;
  title: string;
  category: string;
  thumbnail: string;
  thumbnailPublicId: string;
  content: BlogContent[];
}

export interface Content {
  id?: number;
  type: "heading" | "paragraph" | "image" | "youtube";
  value: string;
}
