import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Variable contient l'URL de base pour les requêtes API qui est l'URL locale du serveur backend
const API_URI = "http://localhost:8800/api";
// Définit la requête de base qui sera utilisée pour toutes les requêtes API
const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

export const apiSlice = createApi({

    baseQuery,
    tagTypes: [],
    // une fonction qui permet de définir les différents endpoints(get post ...) de l'API
    endpoints:
        (builder) => ({

        }),

})

// Ce bloc de code configure une API slice  pour gérer les appels API et le cache dans l'application 