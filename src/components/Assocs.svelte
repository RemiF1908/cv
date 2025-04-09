<!-- src/components/Assocs.svelte -->
<script>
    import AssoCard from './AssoCard.svelte';
    
    export let assocs = [
      {
        title: "Trésorier du club de Cyber-sécurité de Télécom Nancy",
        bullets: [
          "Gestion d'un budget",
          "Réalisation du budget prévisionel annuel",
          "Développement du site web du club, proposant des cours sur la cyber-sécurité"
        ]
      },
      {
        title: "Vice-trésorier du club bar de Télécom Nancy (cafétéria)",
        bullets: [
          "Comptabilité",
          "Respect des règles sanitaires",
          "Logisitique",
          "Accueil client"
        ]
      },
      {
        title: "Responsable logistique du club vidéo de Télécom Nancy",
        bullets: [
          "Gestion du matériel",
          "Inventaire",
          "Utilisation de matériel son et vidéo",
          "Régie"
        ]      
      },
      {
        title: "Administrateur de l'environement informatique des associations de Télécom Nancy",
        bullets: [
          "Gestion de serveur web",
          "Utilisation de Google Workspace"
        ]      
      },
    ];
  </script>
  
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-code mr-3"></i>
      <span>Associatif</span>
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      {#each assocs as assoc}
        <AssoCard {...assoc} />
      {/each}
    </div>
  </section>