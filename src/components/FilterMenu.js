import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import categories from "../data/category";
import { filterfood } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';
const FilterMenu = () => {
  const dispatch = useDispatch();
  const dragScrollRef = useRef();
  const products = useSelector((state) => state.products);
  const { events } = useDraggable(dragScrollRef);
  const [activeclass, setActiveClass] = useState();
  const handleItemClick = (i) => {
    setActiveClass(i)
  }
  const [scrollX, setScrollX] = useState({
    side: ""
  });
  const scrollLeftRef = useRef();
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
    <Box className="row">
      <div className="col-sm-8">
        <div class="slide-sample">
          <div onClick={() => handleScroll({ side: "left" })} className="preSlide">
            <i className="fas fa-caret-square-left" />
          </div>
          <div ref={scrollLeftRef} class="slideouter">
            <div class="slideinner srcl">
              <ul  {...events}
                ref={dragScrollRef}>
                {
                  categories.map((category, i) => {
                    return (
                      <Button
                        key={category.id}
                        style={{ marginRight: "8px" }}
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
          <div onClick={() => handleScroll({ side: "right" })} className="nextSlide">
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
    </Box>
  );
};

export default FilterMenu;
