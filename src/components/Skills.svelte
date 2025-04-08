<!-- src/components/Skills.svelte -->
<script>
    import SkillItem from './SkillItem.svelte';
    
    export let skills = {
      frontend: [
        { name: "HTML/CSS", percentage: 85 },
        { name: "JavaScript/TypeScript", percentage: 60 }
      ],
      backend: [
        { name: "Python", percentage: 90 },
        { name: "Php", percentage: 70 },
        { name: "Golang", percentage: 20 }
      ],
      other: ["Git", "Docker", "Bash"]
    };
  </script>
  
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-cogs mr-3"></i>
      <span>Compétences</span>
    </h2>
    <div class="space-y-6">
      <div>
        <h3 class="font-semibold mb-2">Frontend</h3>
        <div class="space-y-3">
          {#each skills.frontend as skill}
            <SkillItem {...skill} />
          {/each}
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2">Backend</h3>
        <div class="space-y-3">
          {#each skills.backend as skill}
            <SkillItem {...skill} />
          {/each}
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2">Other</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.other as skill}
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{skill}</span>
          {/each}
        </div>
      </div>
    </div>
  </section>