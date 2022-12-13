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
          'X-RapidAPI-Key': '4a4691f7dfmsh8d9c1273bda6964p17367cjsn130c647cb1bb',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
      },
    }
    );
    return {lon};
  } catch (error) {
    return null;
  }
};
