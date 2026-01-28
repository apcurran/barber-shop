const API_DESCRIPTION_URL = "/api/company/description";

// Synchronous action creator
function getAboutDescriptionSuccess(descTxt) {
    return {
        type: "GET_ABOUT_DESCRIPTION_SUCCESS",
        payload: descTxt,
    };
}

function patchAboutDescriptionSuccess(updatedDescTxt) {
    return {
        type: "PATCH_ABOUT_DESCRIPTION_SUCCESS",
        payload: updatedDescTxt,
    };
}

// Async thunk action creator
export function getAboutDescription() {
    return async (dispatch) => {
        try {
            const response = await fetch(API_DESCRIPTION_URL);
            const data = await response.json();
            const descriptionTxt = data.content;

            // Dispatch the synchronous action creator.
            dispatch(getAboutDescriptionSuccess(descriptionTxt));
        } catch (err) {
            console.error(err);
        }
    };
}

export function patchAboutDescription(updatedDescTxt) {
    return async (dispatch) => {
        try {
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`,
                },
                body: JSON.stringify({
                    content: updatedDescTxt,
                }),
            };

            const response = await fetch(API_DESCRIPTION_URL, options);
            const data = await response.json();

            console.log(data);

            // Dispatch the sync action creator.
            dispatch(patchAboutDescriptionSuccess(updatedDescTxt));
        } catch (err) {
            console.error(err);
        }
    };
}
