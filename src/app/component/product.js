import Image from "next/image";
const Products = ({ data }) => {
  return (
    <>
      <div className="p-5">
        <img src={data.image} alt="image" width={"200"} height={"200"} />
        <h3>{data.title}</h3>
        <h4>{data.price}</h4>
      </div>
    </>
  );
};

export default Products;
