import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setTerm } from "./bookListSlice";
import { fetchBooks } from "./createAsyncThunk";

const SearchBox = () => {
    const dispatch = useDispatch<AppDispatch>()

    const performSearch = (event: any) => {
        const value = event.target.value;
        if (value && value.trim().length === 0) {
            return
        }
        dispatch(setTerm(value))
        dispatch(fetchBooks(value))
    }

    return (
        <TextField
            label="Search"
            data-test="search"
            onChange={performSearch}
            margin="normal"
            variant="outlined"
        />
    )
}

export default SearchBox
// const SearchBox = ({ term, onSearch }: { term: string, onSearch: (term: string) => void }) => {
//     const performSearch = (event: any) => {
//         const value = event.target.value;
//         if (value && value.trim().length === 0) return
//         onSearch(value)
//     }
//     return (
//         <TextField
//             label="Search"
//             value={term}
//             data-test="search"
//             onChange={performSearch}
//             margin="normal"
//             variant="outlined"
//         />
//     )
// }