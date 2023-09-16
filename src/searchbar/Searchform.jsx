import React, {useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import { useGloblContext } from "../context";
import "./searchForm.css";

const Searchform = () => {
    // const [setSearchTerm, setResultTitle] = useGloblContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    // useEffect(() => searchText.current.focus(), []);
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     let tempSearchTerm = searchText.current.valueOf.trim();
    //     if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
    //         setSearchTerm("choose your world");
    //         setResultTitle("Please Enter Something...");
    //     }else{
    //         setSearchTerm(searchText.current.valueOf);
    //         }

    //      navigate("/book");   
    // };

    return(
        <div className="search-form bg-transparent">
            <div className="container bg-transparent">
                <div className="search-form-content bg-transparent">
                    <form className="search-form bg-transparent" >
                        <div className="search-form-elem flex flex-sb bg-white">
                            <input type="text" className="form-control" placeholder="Choose the world..." ref={searchText}></input>
                            <button type="submit" className=" search-submit flex flex-c" >
                                <FaSearch className="text-black bg-transparent" size={32}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Searchform;