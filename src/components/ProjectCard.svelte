<!-- src/components/ProjectCard.svelte -->
<script>
    export let title;
    export let description;
    export let tech;
    export let link;
  </script>
  
  <svelte:element
    this={link ? 'a' : 'div'}
    href={link}
    target={link ? "_blank" : null}
    rel={link ? "noopener noreferrer" : null}
    class="project-card bg-card rounded-lg p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 {link ? 'block cursor-pointer' : ''}"
  >
    <div class="flex items-center mb-4">
      <!-- <div class="w-12 h-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
        <i class="fas fa-{icon} text-xl"></i>
      </div> -->
      <h3 class="text-lg font-semibold">{title}</h3>
    </div>
    <p class="text-light mb-4">{description}</p>
    <div class="flex flex-wrap gap-2">
      {#each tech as t}
        <span class="px-3 py-1 border border-white/10 bg-transparent text-light rounded-full text-xs font-medium tracking-wide uppercase hover:border-primary/30 transition-colors">{t}</span>
      {/each}
    </div>
  </svelte:element>