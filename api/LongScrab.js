import axios from "axios";

export const getLongData = async (selected) => {
  try {
    //console.log(selected);
    const {
      data: { lon },
    } = await axios.get(
      `https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname`,
      {
            params: {
                name : selected ,
        },
        headers: {
            'X-RapidAPI-Key': 'f97d5452e1msh196e9b6b8282602p19fa80jsna48df42b7893',
    'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
      },
    }
    );
    return {lon};
  } catch (error) {
    return null;
  }
};
