<!-- src/components/Hobby.svelte -->
<script>
   
    import SkillItem from './SkillItem.svelte';
    

    export let skills = ["Météorologie", "Cartographie", "Sciences politiques", "Dialectologie", "Montagne", "Géographie", "Informatique"];
  </script>
  
  <section>
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-cogs mr-3"></i>
      <span>Centres d'intérêts</span>
    </h2>
    
    <div class="space-y-6">
      <!-- Langages -->
      <div>
        <div class="flex flex-wrap gap-3">
          {#each skills as skill}
            <SkillItem name={skill} />
          {/each}
        </div>
      </div>
      
       </div>
  </section>