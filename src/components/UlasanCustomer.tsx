import AddReview from './AddReview';
import CustomerReviews from './CustomerReviews';

const ReviewComponent: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-orange-400 mb-4">Sampaikan Ulasan Anda!</h2>     
        <AddReview/>
      <div>
        <CustomerReviews/>
      </div>
    </div>
  );
};

export default ReviewComponent;
