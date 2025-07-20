


<template>
    <section class="cat_sec inspiration">
      <div class="container">
          <div class="col-md-12">
              <div class="banner_cat">
                  <h2>Inspirations</h2>
                  <p>Be inspired by the most beautiful interiors</p>
              </div>
          </div>
      </div>
    </section>
  
    <div class="last">
      <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About</a></li>
              </ul>
    </div>

    <InspirationsComponent />
  
  
    <FooterSection />
   </template>
    
    
    
    <script>
    import InspirationsComponent from "@/components/InspirationsComponent.vue"
  import FooterSection from "@/components/FooterSection.vue"
  
    export default {
        name: 'ProductCategory',
        components: {
            InspirationsComponent,
          FooterSection,
        }
    };
    </script>
    
    