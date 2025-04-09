<!-- src/components/Certifications.svelte -->
<script>
    export let certifications = [
      {
        title: "MOOC Gestion de projet",
        issuer: "Rémi Bachelet",
        year: 2024
      },
      {
        title: "MOOC de l'ANSI",
        issuer: "SecNumacadémie",
        year: 2024
      },
      // Add other certifications
    ];
  </script>
  
  <section class="bg-card rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-certificate mr-3"></i>
      <span>Certifications</span>
    </h2>
    <div class="space-y-4">
      {#each certifications as cert}
        <div class="flex items-start">
          <div class="bg-primary bg-opacity-10 p-2 rounded-md mr-3">
            <i class="fas fa-award text-primary"></i>
          </div>
          <div>
            <h3 class="font-semibold">{cert.title}</h3>
            <p class="text-sm text-light">{cert.issuer} - {cert.year}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>