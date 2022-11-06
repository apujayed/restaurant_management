import React from "react";
import categories from "../data/category";
import { filterfood } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
const FilterMenu = () => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <div class="slide-sample">
            <a href="#" id="slideRight" class="preSlide">
            <i className="fas fa-caret-square-left"/>
            </a>
            <div id="sidescrl" class="slideouter">
              <div class="slideinner srcl">
                <ul>
                <li  onClick={()=>dispatch(filterfood('ALL'))} className="list" >ALL</li>
                 {
                    categories.map((category)=>{
                        return(
                            <li  key = {category.id}  onClick={()=>dispatch(filterfood(category.name))} className="list" >{category.name}</li>
                        )
                    })
                 }
                </ul>
              </div>
            </div>

            <a href="#" id="slideLeft" class="nextSlide">
             <i className="fas fa-caret-square-right"/>
            </a>
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
