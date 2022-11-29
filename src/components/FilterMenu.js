import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import categories from "../data/category";
import { filterfood } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';

const FilterMenu = () => {
  const dispatch = useDispatch();
  const dragabbleScrollRef = useRef();
  const products = useSelector((state) => state.products);
  const { events } = useDraggable(dragabbleScrollRef);
  const [activeclass, setActiveClass] = useState(1);
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
      dragabbleScrollRef.current.scrollLeft += 200;
    } else {
      dragabbleScrollRef.current.scrollLeft -= 200;
    }
  }, [scrollX]);

  return (
    <Grid container>
      <Grid item sm={8} md={8} >
        <div class="slide-sample">
          <div onClick={() => handleScroll({ side: "left" })} className="preSlide">
            <i className="fas fa-caret-square-left" />
          </div>
          <div ref={scrollLeftRef} class="slideouter">
            <div {...events}
              ref={dragabbleScrollRef} class="slideinner">
              {
                categories.map((category, i) => {
                  return (
                    <Button
                      key={i}
                      style={{ marginRight: "8px" }}
                      onClick={() => { dispatch(filterfood(category.name)); handleItemClick(category.id) }}
                      variant={activeclass === category.id ? "contained" : "outlined"}
                      size="medium"
                    >
                      {category.name}
                    </Button>
                  )
                })}

            </div>
          </div>
          <div onClick={() => handleScroll({ side: "right" })} className="nextSlide">
            <i className="fas fa-caret-square-right" />
          </div>

        </div>
      </Grid>
      <Grid item md={4} sm={4} paddingY={3} display="flex" justifyContent={"center"} alignItems="center" id="search"
      >
        <Grid container >
          <Grid item md={8} sm={8} >
            <input type="text" className="form-control" value="" />
          </Grid>
          <Grid item md={4} sm={4} >
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterMenu;
