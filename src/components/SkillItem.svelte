<!-- src/components/SkillItem.svelte -->
<script>
    export let name;
  </script>
  
  <div class="inline-block border border-white/10 rounded-full px-4 py-1 hover:border-primary/50 hover:bg-white/5 transition-colors duration-300">
    <span class="text-light hover:text-primary transition-colors duration-200">{name}</span>
  </div>