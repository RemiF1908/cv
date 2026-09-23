<!-- src/components/Experience.svelte -->
<script>
    import TimelineItem from './TimelineItem.svelte';
    
    const experiences = [
      {
        title: "Stage assistant ingénieur",
        company: "Ministère de l'Économie et des Finances - SHFDS",
        period: "Juin-Août 2026",
        bullets: [
          "Déploiement d'un applicatif sur un VPS préalablement durci",
          "Raccordement de l'applicatif et du VPS à un SIEM, création de règles de détection",
          "Respect des normes (ANSSI, Ministère...)"
        ]
      },
      {
        title: "Stage laboratoire",
        company: "Inria Grenoble Alpes - Equipe Tripop",
        period: "Juin-Août 2025",
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
          "Développement d'outils en Python d'analyse d'images avec Google API",
          "Utilisation de Git et de Docker"
        ]
      },
      {
        title: "Stage d'observation",
        company: "Nexvision, Marseille.",
        period: "Avril 2019",
        bullets: [
          "Découverte des métiers en lien avec l'optronique, la CAO et le développement logiciel",
        ]
      },
    ];
  </script>
  
  <section>
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-briefcase mr-3"></i>
      <span>Expériences professionnelles</span>
    </h2>
    
    <div class="space-y-8 relative">
      {#each experiences as experience}
        <TimelineItem {...experience} />
      {/each}
    </div>
  </section>