import axios from "axios";
import { gameDetailURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailURL(id))
}

dispatch ({
    type: "GET_DETAIL",
    payload: {
        game: detailData.data,
    },
});