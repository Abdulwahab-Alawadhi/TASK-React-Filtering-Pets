import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import petsData from "../petsData";
//import { useQuery } from "@sajari/react-hooks";
function PetsList() {
  const [query, setQuery] = useState("");

  const petList = pets
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);
  //console.log(setQuery(65));
  const search = (e) => {
    setQuery(e.target.value);
  };
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={search}
                  type="search"
                  className="form-control rounded"
                  placeholder="Type"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              {query}
              <br />
              Type:
              <select className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
