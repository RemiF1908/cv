<!-- src/components/Languages.svelte -->
<script>
    export let languages = [
      { name: "French", level: "Native", percentage: 100 },
      { name: "English", level: "Intermediate", percentage: 70 },
      { name: "French", level: "Intermediate", percentage: 60 }
    ];
  </script>
  
  <section class="bg-white rounded-xl shadow-md p-8">
    <h2 class="text-2xl font-bold text-primary mb-6 flex items-center">
      <i class="fas fa-language mr-3"></i>
      <span>Langues</span>
    </h2>
    <div class="space-y-4">
      {#each languages as lang}
        <div>
          <div class="flex justify-between mb-1">
            <span>{lang.name}</span>
            <span>{lang.level}</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress bg-blue" style={`width: ${lang.percentage}%`}></div>
          </div>
        </div>
      {/each}
    </div>
  </section>