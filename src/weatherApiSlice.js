import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
let cancelAxios = null;

const initialState = {
  result: "empty",
  isLoading: false,
  weather: {},
};

export const fetchWeather = createAsyncThunk("fetchWeatherApi", async () => {
  const response = await axios.get(API_KEY, {
    cancelToken: new axios.CancelToken((value) => (cancelAxios = value)),
  });

  const base = response.data;
  const info = {
    icon: `https://openweathermap.org/payload/api/media/file/${base.weather[0].icon}.png`,
    temperature: Math.round(base.main.temp),
    min: Math.round(base.main.temp_min),
    max: Math.round(base.main.temp_max),
    description: base.weather[0].description,
  };
  return info;
});

const weatherApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    changeResult: (state, action) => {
      state.result = "changed!";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = {
          ...action.payload,
        };
        
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
