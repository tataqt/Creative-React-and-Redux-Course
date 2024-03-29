import axios from "axios";
import { getDetailsURL, getGameScreenshotURL } from "../../helpers/api";

export const loadDetail = (id) => async (dispatch) => {
    const detaildata = await axios.get(getDetailsURL(id));
    const screenshotData = await axios.get(getGameScreenshotURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: {
                ...detaildata.data,
                screenshots: screenshotData.data.results
            },
        }
    });
}

export const unLoadDetail = () => {
    return { type: "CLEAR_DETAIL" };
}