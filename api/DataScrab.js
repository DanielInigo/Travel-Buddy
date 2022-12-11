import axios from "axios";

export const getPlaceData = async (bl_lat,bl_lng,tr_lat,tr_lng,type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat? bl_lat :  "11.847676",
          tr_latitude: tr_lat? tr_lat: "12.838442",
          bl_longitude: bl_lng? bl_lng : "108.473209",
          tr_longitude: tr_lng? tr_lng : "109.149359",
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          'X-RapidAPI-Key': 'f97d5452e1msh196e9b6b8282602p19fa80jsna48df42b7893',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
      }
    );
    //console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};
