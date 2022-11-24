import React, { useEffect, useRef, useState } from "react";
import categories from "../data/category";
import { filterfood } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box } from '@mui/material';
import { Button } from '@mui/material';
const FilterMenu = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [activeclass, setActiveClass] = useState();
  const [scrollX, setScrollX] = useState({
    side: ""
  });
  const scrollLeftRef = useRef();
  const handleItemClick = (i) => {
    setActiveClass(i)
  }
  const handleScroll = (data) => {
    setScrollX(prev => ({ ...prev, side: data.side }));
  }
  useEffect(() => {
    if (scrollX.side === "right") {
      scrollLeftRef.current.scrollLeft += 200;
    } else {
      scrollLeftRef.current.scrollLeft -= 200;
    }
  }, [scrollX]);

  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <div class="slide-sample">
            <div id="slideRight" onClick={() => handleScroll({ side: "left" })} class="preSlide">
              <i className="fas fa-caret-square-left" />
            </div>
            <div ref={scrollLeftRef} class="slideouter">
              <div class="slideinner srcl">
                <ul>
                  {
                    categories.map((category, i) => {
                      return (

                        <Button
                          key={category.id}
                          onClick={() => { dispatch(filterfood(category.name)); handleItemClick(i) }}
                          variant={activeclass === i ? "contained" : "outlined"}
                          size="medium"
                        >
                          {category.name}
                        </Button>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div id="slideRight" onClick={() => handleScroll({ side: "right" })} className="nextSlide">

              <i className="fas fa-caret-square-right" />
            </div>

          </div>
        </div>
        <div id="search" className="py-3 col-sm-4 col-12 d-flex justify-content-center align-items-center">
          <div className="row d-flex">
            <div className="px-0 col-sm-8 col-8">
              <input type="text" className="form-control" value="" />
            </div>
            <div className="px-0 col-sm-4 col-4">
              <button type="button" class="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
