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
      error = e.message;
    }
  });

    export let skills = {
      language: [
        { name: "HTML/CSS", percentage: 85 },
        { name: "JavaScript/TypeScript", percentage: 60 },
        { name: "Svelte", percentage: 50 },
        { name: "Python", percentage: 90 },
        { name: "Php", percentage: 70 },
        { name: "C", percentage: 60 },
        { name: "Golang", percentage: 60 },
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
      <div>
      <div>
        <div class="space-y-3">
          {#each skills.language as skill}
            <SkillItem {...skill} />
          {/each}
        </div>
      </div>
      <div class="mb-5 mt-5">
        <h3 class="font-semibold mb-2">Autres</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.other as skill}
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{skill}</span>
          {/each}

        </div>
        
      </div>
      
      <span class="font-semibold mb-2" >Point{s} Root-Me : <span class ="text-xl  text-blue-300">{score}</span></span>

    </div>
  </section>