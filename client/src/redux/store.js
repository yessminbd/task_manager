import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import { apiSlice } from "./slices/api/apiSlice";
const Store = configureStore({  // créer un nouveau magasin Redux 
    // Définir les réducteurs qui gèrent les différentes parties de l'état global de l'app
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // les actions et l'état de apiSlice seront gérés par son réducteur
        auth: authReducer // gérer l'état d'authentification sous la clé auth
    },
    // ajouter un middleware personnalisé (apiSlice) au middleware par défaut de Redux
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    // active les outils de développement (Redux DevTools) pour cette instance du store pour visualiser et déboguer l'état et les actions Redux directement dans le navigateur
    devTools: true,
})

export default Store;
// Ce code configure un store Redux avec deux slices :
 // * un pour l'authentification 
 // * un pour la gestion des appels API