<template>
  <section class="about_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about_head">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">Login</a></li>
            </ul>
            <h2>Login to your account</h2>
            <div class="main_form">
              <form action="">
                <div class="login_field">
                  <label for="user_email">Username or email</label>
                  <input type="email" name="user_email"  required>
                </div>
                <div class="login_field">
                  <label for="user_password">Password</label>
                  <input type="password" name="user_password" required>
                </div>
                <div class="login_field_check">
                  <input type="checkbox" name="remberme" required>
                  <label for="remberme">Remember Me</label>
                </div>
                <div class="login_field">
                  <input type="submit" value="Login">
                </div>
                <div class="last_pscer">

                  <RouterLink to="/CreateAccount">Create account</RouterLink>
                  <a href="#">Forgot your password?</a>
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