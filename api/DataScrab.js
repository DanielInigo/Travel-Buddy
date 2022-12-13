import axios from "axios";

export const getPlaceData = async (bl_lat,bl_lng,tr_lat,tr_lng,type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat,
          tr_latitude: tr_lat,
          bl_longitude: bl_lng,
          tr_longitude: tr_lng,
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          'X-RapidAPI-Key': '4a4691f7dfmsh8d9c1273bda6964p17367cjsn130c647cb1bb',
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
