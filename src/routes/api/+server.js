// src/routes/api/getData/+server.js

import { json } from '@sveltejs/kit';


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
      return json({ error: 'Erreur de l\'API externe' }, { status: response.status });
    }

    const data = await response.json();

    return json(data);

  } catch (error) {
    return json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}