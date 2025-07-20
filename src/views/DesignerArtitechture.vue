<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Designers, architects, landscapers</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/influencerCollaborator.png')" alt="">
                    </div>
                    <h5 class="mt-5">Trade program</h5>
                    <p>Are you a designer, architect or landscaper ? If our products are among your favorites to work with, apply for our Trade Program to benefit from discounts when you make purchases from us!</p>
                    <div class="working_condtions">

                        <ul>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-percent"></i>
                                </div>

                                <div class="working_condi_content">
                                    <h5>Discount</h5>
                                    <p>Get a discount on regular priced products at all times with the trade program*.</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="far fa-comment"></i>
                                </div>

                                <div class="working_condi_content">
                                    <h5>Assistance</h5>
                                    <p>Get answers to your questions from a dedicated team available for you!</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-box-open"></i>
                                </div>

                                <div class="working_condi_content">
                                    <h5>Online order</h5>
                                    <p>Enjoy the comfort of your office to place your order online.</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div class="main_return_Form become_distri">
                        <h5>Application form</h5>
                        <form action="">
                            <div class="return_fe">
                                <label for="">Name of the designer, architect or landscaper</label>
                                <input type="text" placeholder="Full name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Company's name</label>
                                <input type="text" placeholder="Company's name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Phone number</label>
                                <input type="text" placeholder="Phone number" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Email</label>
                                <input type="text" placeholder="Email" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Website address</label>
                                <input type="number" placeholder="Website address" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Company's address</label>
                                <input type="text" placeholder="Company's address" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Postal code</label>
                                <input type="email" placeholder="Postal code" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Business Tax Number - GST or HST</label>
                                <input type="text" placeholder="Business Tax Number - GST or HST" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Business Tax Number - QST</label>
                                <input type="text" placeholder="Business Tax Number - QST" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Quebec Enterprise Number (NEQ)</label>
                                <input type="text" placeholder="Quebec Enterprise Number (NEQ)" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Names of persons authorized to make purchases on this account</label>
                                <input type="text" placeholder="Names of persons authorized to make purchases on this account" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <input type="submit" value="Submit the form">
                            </div>
                        </form>

                    </div>

                    <div class="process_dsigner_form">
                        <div class="img_s">
                            <img :src="require('../assets/img/influencer1.webp')" alt="">
                        </div>
                        <ul>
                            <li>
                              <h6>1- Fill out the application</h6>
                              <p>Complete a request by filling out our form below.</p>
                            </li>
                            <li>
                              <h6>2- Get the approval</h6>
                              <p>Once your application is submitted, our team will analyze your file for approval.</p>
                            </li>
                            <li>
                              <h6>3- Place your order</h6>
                              <p>If your request is approved, you will be able to shop online with your personal code.</p>
                            </li>
                        </ul>
                    </div>
                    <p><em>*Please note that submitting your application does not mean that you will be admitted to the program. A member of our team will process your application within two to three business days. Afterwards, we will evaluate your file according to our selection criteria and inform you of the decision by email.</em></p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="second_last">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_newletter">
                    <h2>Save with our newsletter!</h2>
                    <p>Save with our newsletter!</p>
                    <form action="">
                        <input type="text" placeholder="Your email address" required>
                        <input type="submit" value="Subscribe to the newsletter">
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>

    
<script>
import AboutNav from "@/components/AboutNav.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        AboutNav,
        FooterSection,
    }
};
</script>
