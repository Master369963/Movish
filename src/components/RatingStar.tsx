import { PiStarFill, PiStarHalfFill } from "react-icons/pi";

const RatingStar = ({ rating }: { rating: number }) => {
  if (rating) {
    const adjustedRating = Number(rating) / 2;
    const maxStars = 5;
    const fullStars = Math.floor(adjustedRating);
    const halfStar = adjustedRating % 1 > 0.5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < fullStars) {
        stars.push(
          <PiStarFill
            key={i}
            className="text-xl text-secondary-200 dark:text-secondary-100"
          />,
        );
        // full star
      } else if (i === fullStars && halfStar) {
        stars.push(
          <PiStarHalfFill
            key={i}
            className="text-xl text-secondary-200 dark:text-secondary-100"
          />,
        );
        // half star
      }
      // empty star
    }

    return <div className="flex gap-1">{stars}</div>;
  }
};

export default RatingStar;
