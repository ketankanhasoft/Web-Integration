import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMenuList } from "../slices/menuSlice";
import config from "../../helper/config";

//  get menu action method
export const getMenuList = createAsyncThunk(
  "getMenuList",
  async (_request: any, { dispatch }) => {
    try {
      // fetch menu list (teams)
      const res = await fetch(`${config.api_url}/teams`);
      const response = await res.json();
      if (response?.data) {
        dispatch(setMenuList(response?.data));
      }
    } catch (error) {
      //error in api
      console.log(error);
    }
  }
);
