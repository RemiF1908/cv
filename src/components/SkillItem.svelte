<!-- src/components/SkillItem.svelte -->
<script>
    export let name;
    export let percentage;
  </script>
  
  <div>
    <div class="flex justify-between mb-1">
      <span>{name}</span>
      {#if percentage}<span>{percentage}%</span>{/if}
    </div>
    <div class="skill-bar">
      <div class="skill-progress" style={`width: ${percentage}%`}></div>
    </div>
  </div>