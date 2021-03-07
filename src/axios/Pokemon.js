import axios from "axios";
import React, { useEffect  } from "react";

const Pokemon = () => {
  //func for axios
  const datapokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon/ditto")
    //   .then((res) => console.log("response", res))
    //   .catch((err) => console.log("error", err));
    datapokemon();
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Pokemon;
