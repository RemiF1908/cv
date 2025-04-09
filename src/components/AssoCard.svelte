<!-- src/components/AssocCard.svelte -->
<script>
    export let title;
    export let bullets;
  </script>
  
  <div class="project-card bg-gray-1000 rounded-lg p-6 border border-gray-200 transition-all duration-300">
    <div class="flex items-center mb-4">

      <h3 class="text-lg font-semibold">{title}</h3>
    </div>
    <ul class="list-disc pl-5 space-y-2 text-light">
      {#each bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </ul>
  </div>