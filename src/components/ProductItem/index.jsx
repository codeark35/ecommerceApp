import { Button, Rating } from "@mui/material";
import {
  HomeOffer,
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
  ProductImg7,
  ProductImg8,
} from "../../assets";
import {
  FaRegHeart,
  HiOutlineArrowNarrowRight,
  SlSizeFullscreen,
} from "../../assets/icons";
import { useContext } from "react";
import { MyContext } from "../../routes/App";

const ProductItem = (props) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };
  
  return (
    <>
      {/* 1 */}
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img src={ProductImg1} alt="" className="w-100" />
        </div>

        <span className="badge badge-primary">28%</span>

        <div className="actions">
          <Button onClick={() => viewProductDetails(1)}>
            <SlSizeFullscreen />
          </Button>
          <Button>
            <FaRegHeart style={{ fontSize: "20px" }} />
          </Button>
        </div>

        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div>

      {/* {isOpenProductModal === true && (
        <ProductModal closeProductModal={closeProductModal} />
      )} */}

      {/* 2 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg2} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>Werther’s Original Caramel Hard Candies</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.97</span>
          </div>
        </div>
      </div> */}
      {/* 3 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg3} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div> */}
      {/* 4 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg4} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div> */}
      {/* 5 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg5} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div> */}
      {/* 6 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg6} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div> */}
      {/* 7 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg7} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div> */}
      {/* 8 */}
      {/* <div className="item productItem">
        <div className="imgWrapper">
          <img src={ProductImg8} alt="" className="w-100" />
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice ml-2 text-danger">$14.00</span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductItem;
