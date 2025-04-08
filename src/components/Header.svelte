<!-- src/components/Header.svelte -->
<script>
    export let profile = {
      name: "Rémi Ferrato",
      title: "Etudiant ingénieur en informatique",
      image: "/images/photo.jpg",
      contact: {
        email: "remi.ferrato@gmail.com",
        phone: "+33 6 18823660",
        location: "Nancy, FR"
      },
      social: {
        github: "github.com/RemiF1908",
        linkedin: "linkedin.com/in/remiferrato"
      },
      about: "Etudiant en école d'ingénieur à Télécom Nancy"
    };
  </script>
  
  <header class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
    <div class="md:flex">
      <div class="md:w-1/3 bg-primary p-8 flex items-center justify-center">
        <div class="text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img src={profile.image} alt="Profile" class="w-full h-full object-cover" />
          </div>
          <h1 class="text-2xl font-bold text-dark">{profile.name}</h1>
          <p class="text-blue-500">{profile.title}</p>
        </div>
      </div>
      
      <div class="md:w-2/3 p-8">
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-dark mb-6">Contact</h2>
          
          <div class="md:flex md:gap-8 space-y-4 md:space-y-0">
            <div class="flex-1 space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                <a href={`mailto:${profile.contact.email}`} class="text-gray-600 hover:text-primary transition-colors">
                  {profile.contact.email}
                </a>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href={`tel:${profile.contact.phone}`} class="text-gray-600 hover:text-primary transition-colors">
                  {profile.contact.phone}
                </a>
              </div>
            </div>
            
            <div class="flex-1 space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span class="text-gray-600">{profile.contact.location}</span>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <a href={`https://${profile.social.github}`} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary transition-colors">
                  {profile.social.github}
                </a>
              </div>
              
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a href={`https://${profile.social.linkedin}`} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary transition-colors">
                  {profile.social.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>