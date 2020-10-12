// Synchronous action creator
function getAboutDescriptionSuccess(descTxt) {
    return {
        type: "GET_ABOUT_DESCRIPTION_SUCCESS",
        payload: descTxt
    };
}

// Async thunk action creator
export function getAboutDescription() {
    return async (dispatch) => {
        try {
            const API_DESCRIPTION_URL = "/api/company/description";
            const response = await fetch(API_DESCRIPTION_URL);
            const data = await response.json();
            const descriptionTxt = data.content;

            // Dispatch the synchronous action creator.
            dispatch(getAboutDescriptionSuccess(descriptionTxt));
            
        } catch (err) {
            console.error(err);
        }
    }
}