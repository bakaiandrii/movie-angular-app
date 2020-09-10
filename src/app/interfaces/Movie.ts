export interface Movie {
  page: number;
  total_results: number;
  total_pages: number;
  results: [
    {
      title: string;
      release_date: string;
      overview: string;
      poster_path: string;
      popularity: string;
    }
  ];
}
