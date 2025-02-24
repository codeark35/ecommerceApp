import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { SidebarBanner } from "../../assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);
  const [value2, setValue2] = useState(0);
  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
            <h6>product categories</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beauty"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Kids"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beauty"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Kids"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beauty"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Kids"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>filter by price</h6>
            <RangeSlider
              value={value}
              onInput={setValue}
              min={100}
              max={60000}
              step={5}
            />

            <div className=" d-flex pt-2 pb-2 priceRange">
              <span>
                From: <strong className="text-dark">Rs: {value[0]}</strong>
              </span>
              <span className="ml-auto">
                From: <strong className="text-dark">Rs: {value[1]}</strong>
              </span>
            </div>
          </div>

          <div className="filterBox">
            <h6>PRODUCT STATUS</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="In Stock"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="On Sale"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>BRANDS</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Frito Lay"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Nespresso"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Oreo"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Quaker"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Welch's"
                  />
                </li>
              </ul>
            </div>
          </div>

          <Link>
            <img src={SidebarBanner} alt="" className="w-100" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
