"use client"
import { Provider } from "react-redux";
import store from "./Store";
const PrvderTwo = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export default PrvderTwo;