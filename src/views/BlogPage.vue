


<template>
    <section class="cat_sec inspiration">
      <div class="container">
          <div class="col-md-12">
              <div class="banner_cat">
                  <h2>The blog</h2>
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


    <section class="blog_post">
      <div class="container">
        <div class="row mobile_reverse">
          <div class="col-md-6">
            <div class="blog_post_content">
              <h5>COMMERCIAL DESIGN</h5>
              <h2>Plants To Increase Your Airbnb Bookings?</h2>
              <p>Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large…</p>
              <div class="glob_content">
              <a href=""><button class="continue_reading">
                Continue reading
              </button></a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="blog_post_img">
              <img :src="require('../assets/img/blog_post_page.webp')" alt="">
            </div>
          </div>
          </div>
          <div class="row ">
          <div class="col-md-6">
            <div class="blog_post_img">
              <img :src="require('../assets/img/blog_post_page.webp')" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <div class="blog_post_content">
              <h5>COMMERCIAL DESIGN</h5>
              <h2>Plants To Increase Your Airbnb Bookings?</h2>
              <p>Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large…</p>
              <div class="glob_content">
              <a href=""><button class="continue_reading">
                Continue reading
              </button></a>
              </div>
            </div>
          </div>
          </div>
          <div class="row mobile_reverse">
          <div class="col-md-6">
            <div class="blog_post_content">
              <h5>COMMERCIAL DESIGN</h5>
              <h2>Plants To Increase Your Airbnb Bookings?</h2>
              <p>Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large…</p>
              <div class="glob_content">
              <a href=""><button class="continue_reading">
                Continue reading
              </button></a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="blog_post_img">
              <img :src="require('../assets/img/blog_post_page.webp')" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
    <FooterSection />
   </template>
    
    
    
    <script>
  import FooterSection from "@/components/FooterSection.vue"
  
    export default {
        name: 'ProductCategory',
        components: {
          FooterSection,
        }
    };
    </script>
    
    