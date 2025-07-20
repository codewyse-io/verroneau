<template>
    <section class="blog_de">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="main_static_b_details about_uspage">
                        <h4>Become a distributor</h4>
                        <hr>
                        <AboutNav />
                        <hr>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="blog_detailss_content">
                        <div class="first_inner_img">
                            <img :src="require('../assets/img/become_distrubutor.png')" alt="">
                        </div>
                        <!-- <h5 class="mt-5">A reward for your opinion</h5> -->
                        <p>Would you like to distribute Décors Véronneau’s outdoor products? We are open to collaborate with businesses! Our catalog offers a wide range of garden products, such as flower arrangements, palm trees and other outdoor plants.</p>
                       <a href="" class="become_distributor">SEE THE LIST OF DISTRIBUTORS</a>
                       <div class="main_return_Form become_distri">
                        <h5>Want to become a distributor?</h5>
                        <p>Fill out the form below to let us know you are interested in becoming one of our distributor. We will contact you within 24 to 48 hours after submitting your request.</p>
                        <form action="">
                            <div class="return_fe">
                                <label for="">Business name</label>
                                <input type="text" placeholder="Business name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">GST or HST number</label>
                                <input type="text" placeholder="GST or HST number" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Business address</label>
                                <input type="text" placeholder="Business address" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Postal code</label>
                                <input type="text" placeholder="Postal code" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">QST number</label>
                                <input type="number" placeholder="QST number" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Quebec Business Number (QBN)</label>
                                <input type="text" placeholder="Quebec Business Number (QBN)" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Business field of activity</label>
                                <input type="text" placeholder="Business field of activity" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Business website</label>
                                <input type="text" placeholder="Business website" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Email</label>
                                <input type="text" placeholder="Email" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Business phone number</label>
                                <input type="text" placeholder="Business phone number" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Name of the contact person</label>
                                <input type="text" placeholder="Name of the contact person" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Phone number of the contact person</label>
                                <input type="text" placeholder="Phone number of the contact person" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Names of persons authorized to make purchases on this account</label>
                                <input type="text" placeholder="Names of persons authorized to make purchases on this account" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <input type="submit" value="Submit the form">
                            </div>
                        </form>
                        <p><em>Please note that we will conduct a complete analysis before you can become one of our distributors. We reserve the right to refuse your application if it does not meet our selection criteria.</em></p>
                    </div>
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
    