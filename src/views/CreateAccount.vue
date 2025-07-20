<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_head">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">Create account</a></li>
            </ul>
            <h2>Create account</h2>
            <div class="main_form">
              <form action="">
                <div class="login_field">
                  <label for="name">User name</label>
                  <input type="text" name="name"  required>
                </div>
                <div class="mega_field">
                <div class="login_field">
                  <label for="first_name">First name</label>
                  <input type="text" name="first_name"  required>
                </div>
                <div class="login_field">
                  <label for="last_name">Last name</label>
                  <input type="text" name="last_name"  required>
                </div>
              </div>
              <div class="login_field">
                  <label for="email">E-mail address</label>
                  <input type="email" name="email"  required>
                </div>
                <div class="login_field">
                  <label for="password">Password</label>
                  <input type="password" name="password"  required>
                </div>
                <div class="login_field">
                  <label for="rep_password">Repeat password</label>
                  <input type="password" name="rep_password"  required>
                </div>
                <div class="login_field_check">
                  <input type="checkbox" name="remberme" required>
                  <label for="remberme">I agree to receive news, promotions and new products by email from Decors Veronneau.</label>
                </div>
                <RouterLink to="/CreateAccount">See the privacy policy.</RouterLink>
                <div class="login_field">
                  <input type="submit" value="Register">
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