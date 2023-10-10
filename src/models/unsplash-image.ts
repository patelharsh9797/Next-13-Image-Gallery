export interface UnsplashImage {
  alt_description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface UnsplashSearchResponse {
  results: UnsplashImage[];
}
