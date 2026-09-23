<!-- src/components/Education.svelte -->
<script>
    export let education = [
       {
        degree: "Maîtrise d'informatique - Cheminement en cybersécurité",
        institution: "Université de Sherbrooke, Montréal, Canada",
        period: "2026 - 2027",
        link: "https://www.usherbrooke.ca/cefti/programmes-etudes/cybersecurite/maitrise-en-informatique-cheminement-cybersecurite"
      },
      {
        degree: "Ingénieur - Spécialisation en cybersécurité",
        institution: "Télécom Nancy",
        period: "2024 - 2027",
        link: "https://telecomnancy.univ-lorraine.fr/"
      },
      {
        degree: "Classe préparatoire intégrée",
        institution: "Prépa des INP, Grenoble",
        period: "2022 - 2024",
        link: "https://www.groupe-inp.fr/la-prepa-des-inp"
      },
      {
        degree: "Baccalauréat Mathématiques - Sciences de l'ingénieur",
        institution: "Lycée de la Méditerranée, La Ciotat",
        period: "2019 - 2022"
      }
    ];
  </script>
  
  <section>
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-graduation-cap mr-3"></i>
      <span>Formation</span>
    </h2>
    <div class="space-y-6">
      {#each education as edu}
        <div>
          <a href="{edu.link}">
            <h3 class="text-lg font-semibold hover:text-accent transition-colors">{edu.degree}</h3>
          </a>
          <p class="text-light">{edu.institution}</p>
          <p class="text-sm text-gray-500">{edu.period}</p>
        </div>
      {/each}
    </div>
  </section>