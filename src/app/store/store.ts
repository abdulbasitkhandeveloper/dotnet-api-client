import { legacy_createStore } from "@reduxjs/toolkit";
import CounterReducer from "../pages/contact/CounterReducer";

export function ConfigureTheStore() {
    return legacy_createStore(CounterReducer);
}