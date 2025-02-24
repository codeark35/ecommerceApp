import { Button, Dialog, Rating } from "@mui/material";
import { IoMdHeartEmpty, MdClose, MdCompareArrows } from "../../assets/icons";
import { useContext } from "react";
import { MyContext } from "../../routes/App";
import QuantityBox from "../QuantityBox";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  const context = useContext(MyContext);
  return (
    <>
      <Dialog
        open={true}
        className="ProductModal"
        onClose={() => context.setIsOpenProductModal(false)}
      >
        <Button
          className="closeModal"
          onClick={() => context.setIsOpenProductModal(false)}
        >
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr />

        {/* Zoom Part */}
        <div className="row mt-2 productDetailModal ">
          <div className="col-md-5">
            <ProductZoom />
          </div>

          <div className="col-md-7">
            <div className="info d-flex align-items-center mb-3">
              <span className="oldPrice lg mr-2">20.00</span>
              <span className="netPrice text-danger lg">14.00</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                Add to Card
              </Button>
            </div>
            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <IoMdHeartEmpty /> &nbsp; ADD TO WISHLIST
              </Button>

              <Button className="btn-round btn-sml ml-3" variant="outlined">
                <MdCompareArrows /> &nbsp; COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
