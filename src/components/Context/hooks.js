import Context from "./Context"
import { useContext } from "react"
export const useFood = () => {
    return useContext(Context)
}