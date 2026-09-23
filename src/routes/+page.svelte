<!-- src/routes/+page.svelte -->
<script>
    import Header from '../components/Header.svelte';
    import Experience from '../components/Experience.svelte';
    import Projects from '../components/Projects.svelte';
    import Skills from '../components/Skills.svelte';
    import Education from '../components/Education.svelte';
    import Certifications from '../components/Certifications.svelte';
    import Languages from '../components/Languages.svelte';
    import Hobby from '../components/Hobby.svelte'
    import { onMount } from 'svelte';
    import Assocs from '../components/Assocs.svelte';
  
    onMount(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    });
  </script>
  
<svelte:head>
  <title>Rémi Ferrato</title>
</svelte:head>
  
  <div class="bg-background text-light font-sans">
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <!-- Sidebar (Sticky on Desktop) -->
        <div class="lg:w-1/3 lg:sticky lg:top-8 self-start space-y-12">
          <Header />
          <div class="space-y-12 hidden lg:block">
            <Skills />
            <Languages />
            <Hobby />
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="lg:w-2/3 space-y-16">
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Assocs />
          
          <!-- Show Skills/Langs here on mobile only -->
          <div class="space-y-16 lg:hidden">
            <Skills />
            <Languages />
          </div>
        </div>
      </div>
  
      <footer class="mt-12 text-center text-gray-500 text-sm">
        <p class="mt-4">© 2025 Rémi Ferrato.</p>
      </footer>
    </div>
  </div>