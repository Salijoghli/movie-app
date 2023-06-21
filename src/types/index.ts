export interface MovieSearchItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
  
export interface MovieSearchResult {
    Search: MovieSearchItem[];
    totalResults: string;
    Response: string;
}
