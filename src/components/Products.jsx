import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductsCard";
import Header from "./Header";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import LoadingMessage from "./Loading";
import ErrorMessage from "./Error";
import NotFoundMessage from "./Notfound";

export default function Products() {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  

  
  const run = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err, "we have problem");
      });
  };
  
  useEffect(() => {
    run();
  }, []);

    if (Loading) return <LoadingMessage />;
  if (Error) return <ErrorMessage />;
  if (!Products) return <NotFoundMessage />;

  return (
<>



<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-[20px]">
    {Products.map((Product) => (
      <ProductCard key={Product.id} product={Product} />
    ))}
</div>

</>
  );

}
