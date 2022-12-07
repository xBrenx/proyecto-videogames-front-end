/* eslint-disable react-hooks/exhaustive-deps */
import not_found from "./not_found.webp"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import {
  searchVideoagame,
  getAllVideogames,
  filterOrder,
  filterSource,
  getAllGenres,
  filterGender,
  loading,
} from "../../Redux/Actions/actions";
import Card from "../../Components/Card/Card";
import Pagina from "../../Components/Paginator/Paginator";
import Load from "../../Components/Load/Load";
import Options from "../../Components/Options/Options";
import Nav from "../Nav/Nav";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.Videogames);
  const allGenders = useSelector((state) => state.Genders);
  const load = useSelector((state) => state.loader);
  const [currentPage, setcurrentPage] = useState(1);
  const [ordenado, setOrdenado] = useState("");
  const indexLastVideogame = currentPage * 15; //15
  const indexFirtsVideogame = indexLastVideogame - 15; //0
  const currentVideogames = allVideogames.slice(
    indexFirtsVideogame,
    indexLastVideogame
  );

  const paginado = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const avanza = ()=>{
        if(currentPage < Math.ceil(allVideogames.length/15)){
          paginado(currentPage + 1)
        }else{
          console.log(Math.ceil(allVideogames/15))
        }
        
  };
  const retrocede = ()=>{
    if(currentPage > 1){
      paginado(currentPage - 1)
    }
    console.log(currentPage);
    console.log(currentPage - 1);
  };

  const resetea = (e) => {
    dispatch(getAllVideogames());
    paginado(1);
  };

  const handleSource = (e) => {
    dispatch(filterSource(e.target.value));
    paginado(1);
  };

  const handleOrden = (e) => {
    setOrdenado(e.target.value);
     dispatch(filterOrder(e.target.value));
    paginado(1);
  };

  const handleGender = (e) => {
    dispatch(filterGender(e.target.value));
    paginado(1);
  };

  const handleSearch = (e) => {
    dispatch(searchVideoagame(e.target.value));
    paginado(1);
  };

  useEffect(async () => {
    if (ordenado === "") {
      dispatch(loading())
      await dispatch(getAllVideogames());
      dispatch(loading());
      dispatch(getAllGenres());
    } else {
      dispatch(filterOrder(ordenado));
    }
  }, [dispatch, ordenado]);

  useEffect(()=>{
    if(!currentPage){
      paginado(1)
    }
  },[])


  
  if (!load) {
    return <Load />;
  } else if(currentVideogames?.length === 0){
    return(
      <div key={1}>
        <Nav
        handleSearch={handleSearch}
        />
        <Options
          resetea={resetea}
          handleSource={handleSource}
          handleOrden={handleOrden}
          handleGender={handleGender}
          allGenders={allGenders}
        />
        <h3 className="error_h3" style={{color: "#630ec5"}}>¡Not found!</h3>
      <img className="error_image" src={not_found} alt="not found" />
      </div>
    )
  }else{
    return (
      <div>
        <Nav
        handleSearch={handleSearch}
        />
        <Options
          resetea={resetea}
          handleSource={handleSource}
          handleOrden={handleOrden}
          handleGender={handleGender}
          allGenders={allGenders}
        />

        <Pagina
          videogamesForPage={15}
          allVideogames={allVideogames.length}
          paginado={paginado}
          avanza={avanza}
          retrocede={retrocede}
        />

        <div className="container-cards">
          {currentVideogames?.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.image}
              genres={e.genders?.join(", ")}
            />
          )) 
          }
        </div>
          <span className="pagina">{`--->${currentPage} <---`}</span>
      </div>
    );
  }
}
