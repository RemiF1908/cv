<!-- src/components/Education.svelte -->
<script>
    export let education = [
      {
        degree: "Ingénieur du numérique",
        institution: "Télécom Nancy",
        period: "2024 - 2027"
      },
      {
        degree: "Classe préparatoire intégrée",
        institution: "Prépa des INP, Grenoble",
        period: "2022 - 2024"
      },
      {
        degree: "Baccalauréat Mathétique Science de l'ingénieur",
        institution: "Lycée de la Méditerranée, La Ciotat",
        period: "2019 - 2022"
      }
    ];
  </script>
  
  <section class="bg-card rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-graduation-cap mr-3"></i>
      <span>Formation</span>
    </h2>
    <div class="space-y-6">
      {#each education as edu}
        <div>
          <h3 class="text-lg font-semibold">{edu.degree}</h3>
          <p class="text-light">{edu.institution}</p>
          <p class="text-sm text-gray-500">{edu.period}</p>
        </div>
      {/each}
    </div>
  </section>