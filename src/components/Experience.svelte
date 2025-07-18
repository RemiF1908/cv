<!-- src/components/Experience.svelte -->
<script>
    import TimelineItem from './TimelineItem.svelte';
    
    const experiences = [
      {
        title: "Stage laboratoire",
        company: "Inria Grenoble Alpes - Equipe Tripop",
        period: "Juin-Aout 2025",
        bullets: [
          "Découverte du monde de la recherche",
          "Prise en main de Pytorch",
          "Étude du comportement élastique des matériaux à l'aide de réseaux de neurones",
        ]
      },
      {
        title: "Stage ouvrier",
        company: "IRNC (Institut de recherche sur la résolution non-violente des conflits)",
        period: "Mai-Juin 2024",
        bullets: [
          "Participation à la création du nouveau site web de l'institut",
          "Utilisation de drupal",
          "Utilisation de GIT et de Docker"
          // Other bullet points
        ]
      },
      {
        title: "Stage d'observation",
        company: "Nexvision, Marseille.",
        period: "Avril 2019",
        bullets: [
          "Découverte des métiers en lien avec l'optronique, la CAO, et le développement logiciel",
          // Other bullet points
        ]
      },
      // Other experiences
    ];
  </script>
  
  <section class="bg-card rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-briefcase mr-3"></i>
      <span>Expérience professionnel</span>
    </h2>
    
    <div class="space-y-8 relative">
      {#each experiences as experience}
        <TimelineItem {...experience} />
      {/each}
    </div>
  </section>