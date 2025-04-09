<!-- src/components/TimelineItem.svelte -->
<script>
    export let title;
    export let company;
    export let period;
    export let bullets;
  </script>
  
  <div class="relative pl-8 timeline-item">
    <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
    <div class="mb-2">
      <h3 class="text-xl font-semibold">{title}</h3>
      <div class="flex flex-wrap justify-between text-light">
        <span>{company}</span>
        <span class="text-sm">{period}</span>
      </div>
    </div>
    <ul class="list-disc pl-5 space-y-2 text-light">
      {#each bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </ul>
  </div>