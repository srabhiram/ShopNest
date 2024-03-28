
const Rating = ({ value }) => {
  const roundedValue = Math.round(value); // Round off the rating value to the nearest integer
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedValue) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
