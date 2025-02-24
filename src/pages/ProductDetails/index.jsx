import ProductZoom from "../../components/ProductZoom";
import { Button, Rating, Tooltip } from "@mui/material";
import QuantityBox from "../../components/QuantityBox";
import {
  BsFillCartFill,
  IoMdHeartEmpty,
  MdCompareArrows,
} from "../../assets/icons";
import { useState } from "react";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-secondary mr-2">Brands :</span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item ">
                  <div className=" d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />

                    <span className="text-secondary cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>

              <div className="info d-flex align-items-center mb-3">
                <span className="oldPrice lg mr-2">20.00</span>
                <span className="netPrice text-danger lg">14.00</span>
              </div>

              <span className="badge bg-success">IN STOCK</span>

              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent.Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent
              </p>

              <div className="d-flex align-items-center productSize">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      400g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                  <BsFillCartFill /> &nbsp; Add to Card
                </Button>

                <Tooltip title="Add to Wishlist" placement="top">
                  <Button
                    className="btn-blue btn-lg btn-big btn-circle ml-4"
                    variant="outlined"
                  >
                    <IoMdHeartEmpty />
                  </Button>
                </Tooltip>

                <Tooltip title="Add to Compare" placement="top">
                  <Button
                    className="btn-blue btn-lg btn-big btn-circle ml-2"
                    variant="outlined"
                  >
                    <MdCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailsPageTaps">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>

              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    Quisque varius diam vel metus mattis, id aliquam diam
                    rhoncus. Proin vitae magna in dui finibus malesuada et at
                    nulla. Morbi elit ex, viverra vitae ante vel, blandit
                    feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo
                    maximus a. Nullam ultricies sodales nunc, in pellentesque
                    lorem mattis quis. Cras imperdiet est in nunc tristique
                    lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a
                    tortor.
                  </p>

                  <p>
                    Morbi ut sapien vitae odio accumsan gravida. Morbi vitae
                    erat auctor, eleifend nunc a, lobortis neque. Praesent
                    aliquam dignissim viverra. Maecenas lacus odio, feugiat eu
                    nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien,
                    elementum sit amet eros sit amet, ultricies cursus ipsum.
                    Sed consequat luctus ligula. Curabitur laoreet rhoncus
                    blandit. Aenean vel diam ut arcu pharetra dignissim ut sed
                    leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem
                    orci convallis quam, sit amet consequat nulla felis pharetra
                    lacus. Duis semper erat mauris, sed egestas purus commodo
                    vel.
                  </p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>25 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="handle-height">
                          <th>Handle height(ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air/wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr className="color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answer</h3>
                      <br />

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                              alt=""
                            />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Jaya
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-secondary">26/06/2024</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                          <p>
                            Noodles & Company is an American fast-casual
                            restaurant that offers international and American
                            noodle dishes and pasta in addition to soups and
                            salads. Noodles & Company was founded in 1995 by
                            Aaron Kennedy and is headquartered in Broomfield,
                            Colorado. The company went public in 2013 and
                            recorded a $457 million revenue in 2017.In late
                            2018, there were 460 Noodles & Company locations
                            across 29 states and Washington, D.C.
                          </p>
                        </div>
                      </div>

                      <br className="res-hide" />
                      <br className="res-hide" />

                      <form className="reviewForm">
                        <h4>Add a review</h4>

                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Review"
                            name="review"
                          ></textarea>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </div>

                        <br />
                        <div className="form-group">
                          <Button
                            type="submit"
                            className="btn-blue btn-lg btn-big btn-round"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-4 pl-5 reviewBox">
                      <h4>Customer reviews</h4>

                      <div className="d-flex align-items-center mt-2">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                        />
                        <strong className="ml-3">4.8 out of 5</strong>
                      </div>

                      <br />

                      <div className="progressBarBox d-flex align-items-center ">
                        <span className="mr-3">5 star</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center ">
                        <span className="mr-3">4 star</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "50%", height: "20px" }}
                          >
                            50%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center ">
                        <span className="mr-3">3 star</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "55%", height: "20px" }}
                          >
                            55%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center ">
                        <span className="mr-3">2 star</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "35%", height: "20px" }}
                          >
                            35%
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center ">
                        <span className="mr-3">1 star</span>
                        <div
                          className="progress"
                          style={{ width: "78%", height: "20px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "25%", height: "20px" }}
                          >
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <br />

          <RelatedProducts title="RELATED PRODUCTS" />
          <RelatedProducts title="RECENTLY VIEWED PRODUCTS" />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
