import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import LoadingMessage from './Loading';
import ErrorMessage from './Error';
import NotFoundMessage from './Notfound';







export default function ProductPages() {
  const [Product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const { id } = useParams();

  const run = () => {
    setLoading(true);
    setError(false);
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err, "we have problem");
      });
  };

  useEffect(() => {
    run();
  }, [id]);

  if (Loading) return <LoadingMessage />;
  if (Error) return <ErrorMessage />;
  if (!Product) return <NotFoundMessage />;

  return (
    <div className="p-5 max-w-4xl mx-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{Product.title}</h2>
      <img 
        src={Product.image} 
        alt={Product.title} 
        className="w-full max-w-sm h-auto object-contain mb-8 rounded-lg shadow-md" 
      />
      <p className="mb-6 text-justify leading-relaxed text-gray-700">{Product.description}</p>
      <p className="text-green-600 font-bold text-xl md:text-2xl">{Product.price} $</p>
    </div>
  );
}
