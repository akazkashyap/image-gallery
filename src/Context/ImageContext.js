import { useReducer, createContext } from "react";
import { data } from "../data"

const Context = createContext()

const initState = {
    imageData: data,
    currentImageIndex: 0,
    totalImages: data.length,
    seletedImageRef: null
}

const reducer = (state, action) => {
    switch (action.type) {

        case "change_current_image":
            return { ...state, currentImageIndex: action.payload }

        case "set_image_ref":
            return { ...state, seletedImageRef: action.payload }

        default:
            return state
    }
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const changeCurrentImage = (index) => {
        dispatch({ type: "change_current_image", payload: index })
    }
    const setImageRef = (ref) => {
        dispatch({ type: "set_image_ref", payload: ref })
    }

    return (
        <Context.Provider value={{ state, changeCurrentImage, setImageRef }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }