<!-- src/components/Projects.svelte -->
<script>
    import ProjectCard from './ProjectCard.svelte';
    
    export let projects = [
      {
        title: "OpenBar",
        description: "Application web open source permettant la gestion de la cafétéria de Télécom Nancy",
        tech: ["Golang", "Svelte", "MongoDB"],
        icon: "project-diagram"
      },
      {
        title: "EDT CPP",
        description: "Site web permettant aux étudiants de la Prépa des INP de Grenoble d'obtenir un fichier ICS avec leur emploi du temps personnalisé en fonction de leurs options  ",
        tech: ["Python", "Azure"],
        icon: "project-diagram"
      },
      // Add other projects
    ];
  </script>
  
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-code mr-3"></i>
      <span>Projects</span>
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>