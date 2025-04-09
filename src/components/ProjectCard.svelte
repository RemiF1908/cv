<!-- src/components/ProjectCard.svelte -->
<script>
    export let title;
    export let description;
    export let tech;
  </script>
  
  <div class="project-card bg-gray-1000 rounded-lg p-6 border border-gray-200 transition-all duration-300">
    <div class="flex items-center mb-4">
      <!-- <div class="w-12 h-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
        <i class="fas fa-{icon} text-xl"></i>
      </div> -->
      <h3 class="text-lg font-semibold">{title}</h3>
    </div>
    <p class="text-light mb-4">{description}</p>
    <div class="flex flex-wrap gap-2">
      {#each tech as t}
        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{t}</span>
      {/each}
    </div>
  </div>