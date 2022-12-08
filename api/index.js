import axios from "axios";

export const getPlaceData = async (type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: "11.847676",
          bl_longitude: "108.473209",
          tr_longitude: "109.149359",
          tr_latitude: "12.838442",
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "b09c2a0aaamshbcbc5a8482a5affp166213jsnf8377a83aed3",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
