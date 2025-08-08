import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Récupèrer les informations utilisateur depuis le localStorage
    user: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    isSidebarOpen: false,
}
const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            // Reçoit les informations utilisateur dans action.payload
            // Met à jour l'état user avec ces informations
            state.user = action.payload;
            // Stocke  les informations utilisateur dans le localStorage
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            // Réinitialise l'état utilisateur à null
            state.user = null;
            // Supprime les informations de l'utilisateur du localStorage
            localStorage.removeItem('userInfo');
        },
        setOpenSidebar: (state, action) => {
            //Modifie l'état du Sidebar en fonction de la valeur passée dans action.payload
            state.isSidebarOpen = action.payload;
        }
    },
}
)
export const {setCredentials, logout, setOpenSidebar} = authSlice.actions;
export default authSlice.reducer