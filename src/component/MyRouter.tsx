import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AddFilm } from "../pages/AddFilm";
import { AddGenre } from "../pages/AddGenre";
import { FilmDetails } from "../pages/FilmDetails";
import { Films } from "../pages/Films";
import { GenreDetails } from "../pages/GenreDetails";
import { Genres } from "../pages/Genres";
import { Layout } from "../pages/Layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Films />,
      },
      {
        path: 'genres',
        element: <Genres/>
      },
      {
        path: 'addFilm',
        element: <AddFilm/>
      },
      {
        path: 'addGenre',
        element: <AddGenre/>
      },
      {
        path: 'film/:id',
        element: <FilmDetails/>
      },
      {
        path: 'genre/:id',
        element: <GenreDetails/>
      }
    ],
  },
]);
