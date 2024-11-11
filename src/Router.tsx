import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";
import PageNotFound from "./pages/PageNotFound";
import TVPages from "./pages/theme_pages/TVPages";
import MoviePages from "./pages/theme_pages/MoviePages";
import KidsPages from "./pages/theme_pages/KidsPages";

const Router = ():JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/TV" element={<TVPages />} />
        <Route path="/영화" element={<MoviePages />} />
        <Route path="/키즈" element={<KidsPages />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;