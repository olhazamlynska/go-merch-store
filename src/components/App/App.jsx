import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

//import NotFound from 'path/to/pages/NotFound';

const About = lazy(() => import('../../pages/About/About'));
const Home = lazy(() => import('../../pages/Home/Home'));
const ProductDetails = lazy(() =>
  import('../../pages/ProductDetails/ProductDetails')
);
const Products = lazy(() => import('../../pages/Products/Products'));
const Mission = lazy(() => import('../Mission/Mission'));
const Team = lazy(() => import('../Team/Team'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
