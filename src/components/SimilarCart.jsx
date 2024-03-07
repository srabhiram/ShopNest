import { useSelector } from "react-redux";

const SimilarCart = () => {
  const simialarCat = useSelector((state) => state?.singleCategory) || [];

  console.log(simialarCat);

  return (
    <div className="md:p-12 bg-white md:w-5/6 max-sm:w-full">
      {simialarCat.map(({ id, title, image, price, rating }) => (
        <>
          <div>
            <img src={image} alt="" width={90} className="" />
          </div>
        </>
      ))}
    </div>
  );
};

export default SimilarCart;
