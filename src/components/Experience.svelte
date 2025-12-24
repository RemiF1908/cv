<!-- src/components/Experience.svelte -->
<script>
    import TimelineItem from './TimelineItem.svelte';
    
    const experiences = [
      {
        title: "Stage laboratoire",
        company: "Inria Grenoble Alpes - Equipe Tripop",
        period: "Juin-Aout 2025",
        bullets: [
          "Étude du comportement des matériaux inélastiques à l'aide de perceptrons multicouches",
          "Développement et apprentissage de modèles avec PyTorch dans un environnement de recherche"
        ]
      },
      {
        title: "Stage ouvrier",
        company: "IRNC (Institut de recherche sur la résolution non-violente des conflits)",
        period: "Mai-Juin 2024",
        bullets: [
          "Développement d'outils en Python d'analyse d'image avec Google API",
          "Utilisation de Git et de Docker"
        ]
      },
      {
        title: "Stage d'observation",
        company: "Nexvision, Marseille.",
        period: "Avril 2019",
        bullets: [
          "Découverte des métiers en lien avec l'optronique, la CAO, et le développement logiciel",
        ]
      },
    ];
  </script>
  
  <section class="bg-card rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-briefcase mr-3"></i>
      <span>Expérience professionnelle</span>
    </h2>
    
    <div class="space-y-8 relative">
      {#each experiences as experience}
        <TimelineItem {...experience} />
      {/each}
    </div>
  </section>