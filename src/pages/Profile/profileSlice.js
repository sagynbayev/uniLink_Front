import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: { user: null },
    reducers: {
        updateUserProfilePicture: (state, action) => {
            const newProfilePicture = action.payload;
            state.user.profilePicture = newProfilePicture;
        },
    },
});

export const { updateUserProfilePicture } = profileSlice.actions;

export default profileSlice.reducer;