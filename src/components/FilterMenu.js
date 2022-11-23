import React,{useState} from "react";
import categories from "../data/category";
import { filterfood } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
const FilterMenu = () => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [activeclass, setActiveClass] = useState();
    const handleItemClick = (i) => {
      // this will trigger a rerender
      setActiveClass(i)
      }
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
                 {
                    categories.map((category,i)=>{
                        return(
                            <li  key = {category.id} className={activeclass === i ? "active" : "list" }  onClick={()=>{dispatch(filterfood(category.name)); handleItemClick(i)}} >{category.name}</li>
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
