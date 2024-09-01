import React, { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  id: string;
  createdAt: string;
  name: string;
  ulasan: string;
}

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleReviews, setVisibleReviews] = useState<number>(5);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("https://66d3be525b34bcb9ab3cee6e.mockapi.io/ulasan/ulasan-customer");
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const showMoreReviews = () => {
    setVisibleReviews((prevVisible) => prevVisible + 5);
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-xl font-bold">Ulasan Pelanggan</h2>
      <div className="space-y-4 mt-4">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="p-4 border rounded shadow">
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-600">{review.ulasan}</p>
            <p className="text-sm text-gray-500">
              Dikirim pada {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className="text-center mt-4">
          <button
            className="button bg-orange-400 rounded"
            onClick={showMoreReviews}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
