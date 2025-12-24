<!-- src/components/Skills.svelte -->
<script>
   
    import SkillItem from './SkillItem.svelte';
    

   import { onMount } from 'svelte';
  let data = null;
  let error = null;
  export let score = "...";
  var s=""
  onMount(async () => {
    try {
      const response = await fetch('/api');

      if (!response.ok) {
        throw new Error(`Erreur: ${response.statusText}`);
      }

      data = await response.json();
      score = data['score'];
      if(score != "0"){
        s = "s";
      }

    } catch (e) {
      error = e instanceof Error ? e.message : 'Erreur inconnue';
    }
  });

    export let skills = {
      language: [
        { name: "Python", percentage: 90 },
        { name: "Golang", percentage: 60 },
        { name: "Php", percentage: 70 },
        { name: "C", percentage: 60 },
        { name: "HTML/CSS", percentage: 85 },
        { name: "JavaScript/TypeScript", percentage: 60 },
        { name: "Svelte", percentage: 50 },
      ],
      other: ["Git", "Docker", "Bash", "CI/CD", "Portainer"]
    };
  </script>
  
  <section class="bg-card rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-cogs mr-3"></i>
      <span>Compétences</span>
    </h2>
    
    <div class="space-y-6">
      <!-- Langages -->
      <div>
        <h3 class="font-semibold mb-3 text-gray-300">Langages</h3>
        <div class="flex flex-wrap gap-3">
          {#each skills.language as skill}
            <SkillItem name={skill.name} />
          {/each}
        </div>
      </div>
      
      <!-- Outils -->
      <div>
        <h3 class="font-semibold mb-3 text-gray-300">Outils</h3>
        <div class="flex flex-wrap gap-3">
          {#each skills.other as skill}
            <SkillItem name={skill} />
          {/each}
        </div>
      </div>
      
      <!-- Root-Me -->
      <div class="pt-4 border-t border-gray-700">
        <span class="font-semibold text-gray-300">Point{s} Root-Me : </span>
        <span class="text-xl text-cyan-400">{score}</span>
      </div>
    </div>
  </section>