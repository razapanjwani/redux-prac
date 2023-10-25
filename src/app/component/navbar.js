"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  let selector = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex gap-2 justify-between p-6">
        <h1>Navbar</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/">
              cartitems :{" "}
              <span className="font-bold text-lg">
                {selector.totalQuantity}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
