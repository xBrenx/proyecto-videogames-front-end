import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Load from "../../Components/Load/Load";
import { getOneVideogame, loading } from "../../Redux/Actions/actions";
import "./Details.css";

export default function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  const load = useSelector((state) => state.loader);
  const details = useSelector((state) => state.VideogameDetail);

  const id = params.id;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(loading());
    await dispatch(getOneVideogame(id));
    dispatch(loading());
  }, [dispatch, id]);

  if (!load) {
    return <Load />;
  } else {
    return details.map((e) => {
      return (
        <div key={e.id}>
          <div
            
            className="fondo"
            style={{ backgroundImage: `url(${ e.image})` }}
          ></div>

          <div className="content">
            <div
              className="img"
              style={{ backgroundImage: `url(${e.image})` }}
            ></div>

            <div className="image-desc">
              <h1 className="letra">{e.name}</h1>
              <h4 className="letra">Released: {e.released}</h4>
              <h5 className="letra">{e.description}</h5>
              <h5 className="letra">Géneros: {e.genders.join(", ")}</h5>
              <h5 className="letra">Plataformas: {e.platforms.join(", ")}</h5>
              <h5 className="letra">Rating: {e.rating}</h5>
            </div>
            
            <div className="butondetail">
            <button className="bback">
            <div className="bbackdiv">←</div>
            <Link to="/videogames">
            <span className="bbackspan">Back</span>
            </Link>
          </button> 
            </div>

          </div>
        
        </div>
      );
    });
  }
}
