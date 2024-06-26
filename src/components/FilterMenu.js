import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import categories from "../data/category";
import { filterfood } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Divider } from '@mui/material';
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
          <div>
          <div onClick={() => handleScroll({ side: "left" })} className="preSlide">
            <KeyboardArrowLeftIcon/>
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
                      variant={activeclass === category.id ? "contained" : ""}
                      size="medium"
                    >
                      {category.name}
                    </Button>
                  )
                })}

            </div>
          </div>
          <div onClick={() => handleScroll({ side: "right" })} className="nextSlide">
            <KeyboardArrowRightIcon/>
          </div>
       </div>

        </div>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default FilterMenu;


// import React, { useEffect, useRef, useState } from "react";
// import { useDraggable } from "react-use-draggable-scroll";
// import categories from "../data/category";
// import { filterfood } from "../store/productsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Box, Button } from '@mui/material';
// const FilterMenu = () => {
//   const dispatch = useDispatch();
//   const dragabbleScrollRef = useRef();
//   const products = useSelector((state) => state.products);
//   const { events } = useDraggable(dragabbleScrollRef);
//   const [activeclass, setActiveClass] = useState();
//   const handleItemClick = (i) => {
//     setActiveClass(i)
//   }
//   const [scrollX, setScrollX] = useState({
//     side: ""
//   });
//   const scrollLeftRef = useRef();
//   const handleScroll = (data) => {
//     setScrollX(prev => ({ ...prev, side: data.side }));
//   }
//   useEffect(() => {
//     if (scrollX.side === "right") {
//       scrollLeftRef.current.scrollLeft += 200;
//     } else {
//       scrollLeftRef.current.scrollLeft -= 200;
//     }
//   }, [scrollX]);

//   return (
//     <Box className="row">
//       <div className="col-sm-8">
//         <div class="slide-sample">
//           <div onClick={() => handleScroll({ side: "left" })} className="preSlide">
//             <i className="fas fa-caret-square-left" />
//           </div>
//           <div ref={scrollLeftRef} class="slideouter">
//             <div {...events}
//               ref={dragabbleScrollRef} class="slideinner">

//               {
//                 categories.map((category, i) => {
//                   return (
//                     <Button
//                       key={category.id}
//                       style={{ marginRight: "8px" }}
//                       onClick={() => { dispatch(filterfood(category.name)); handleItemClick(i) }}
//                       variant={activeclass === i ? "contained" : "outlined"}
//                       size="medium"
//                     >
//                       {category.name}
//                     </Button>
//                   )
//                 })}

//             </div>
//           </div>
//           <div onClick={() => handleScroll({ side: "right" })} className="nextSlide">
//             <i className="fas fa-caret-square-right" />
//           </div>

//         </div>
//       </div>
//       <div id="search" className="py-3 col-sm-4 col-12 d-flex justify-content-center align-items-center">
//         <div className="row d-flex">
//           <div className="px-0 col-sm-8 col-8">
//             <input type="text" className="form-control" value="" />
//           </div>
//           <div className="px-0 col-sm-4 col-4">
//             <button type="button" class="btn btn-primary">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default FilterMenu;
