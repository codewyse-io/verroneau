<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_head">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">Lost Password</a></li>
            </ul>
            <h2>Lost password</h2>
            <div class="main_form">
              <form action="">
                
              
              <div class="login_field">
                  <label for="email">E-mail address</label>
                  <input type="email" name="email"  required>
                </div>
                
                <div class="login_field">
                  <input type="submit" value="Get New Password">
                </div>
              </form>
            </div>
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
      name: 'AboutUs',
      components: {
        FooterSection,
      }
  };
  </script>