type ThumbnailSize = "small" | "medium" | "large";
type TrendingThumbnailSize = "small" | "large";

interface Movie {
  title: string;
  thumbnail: {
    regular: {
      [size in ThumbnailSize]: string;
    };
    trending?: {
      [size in TrendingThumbnailSize]: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
