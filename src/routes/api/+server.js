// src/routes/api/getData/+server.js

import { json } from '@sveltejs/kit';

// Il est fortement recommandé de stocker votre clé API dans des variables d'environnement
// et non directement dans le code.
const apiKey = '301767_b025e52cfe57351949a44947b1d3ab7c118051a3dbee4d12198c81a267a5b6aa'; 
const apiUrl = 'https://api.www.root-me.org/auteurs/301767'; // L'URL de l'API externe

/** @type {import('./$types.js').RequestHandler} */
export async function GET() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Cookie': `api_key=${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // Si la réponse de l'API externe n'est pas bonne, on la transmet au client.
      return json({ error: 'Erreur de l\'API externe' }, { status: response.status });
    }

    const data = await response.json();

    // On retourne les données de l'API externe sous forme de réponse JSON.
    return json(data);

  } catch (error) {
    // Gestion des erreurs réseau ou autres problèmes
    return json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}