<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Careers</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/careers.webp')" alt="">
                    </div>
                    <p class="mt-5">Headquartered in Laval, Véronneau is without a doubt the largest retail store specializing in artificial plants and flowers in Quebec. We are always looking for experienced candidates to join our team. At Décors Véronneau, teamwork, innovation and respect are among our most important values. Here, our passion is contagious!</p>
                    <p>We offer a stimulating and dynamic work environment. It’s the place to be to discover the latest decorating trends. Whether you want to work in our boutique, in our offices or in our warehouse, we have a place for you!</p>
                    <h5>Décors Véronneau is :</h5>
                    <ul>
                        <li>1 store</li>
                        <li>1 online store</li>
                        <li>2 warehouses</li>
                        <li>More than 3000 products</li>
                        <li>More than 65 employees</li>
                        <li>More than 77 distributors</li>
                    </ul>
                    <p>Join a dynamic and creative team, where your suggestions will finally be heard! We are always looking for people who want to be part of the Décors Véronneau’s family. Whether you are a florist, a sale associate, a warehouse or a production worker, we will be pleased to meet you.</p>
                    <div class="working_condtions">
                        <h3>A range of great working conditions!</h3>
                        <p>At Décors Véronneau, your well-being is important to us! You will have access to a host of benefits, such as generous employee discounts and a group insurance plan.</p>

                        <ul>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-coins"></i>
                                </div>
                               
                                <div class="working_condi_content">
                                    <h5>Savings plan</h5>
                                    <p>Voluntary retirement savings plan</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-pills"></i>
                                </div>
                              
                                <div class="working_condi_content">
                                    <h5>Healthcare</h5>
                                    <p>Group insurance plan</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-tag"></i> 
                                </div>
                      
                                <div class="working_condi_content">
                                    <h5>Discounts</h5>
                                    <p>Employee discounts after 3 months</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-coffee"></i>
                                </div>
                      
                                <div class="working_condi_content">
                                    <h5>Coffee available</h5>
                                    <p>Access to two coffee machines</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-leaf"></i>
                                </div>
                      
                                <div class="working_condi_content">
                                    <h5>Green spaces</h5>
                                    <p>Green and stimulating environment</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-laptop"></i>
                                </div>
                            
                                <div class="working_condi_content">
                                    <h5>Offices</h5>
                                    <p>Modern and inviting offices</p>
                                </div>
                            </li>
                            
                          
                        </ul>
                    </div>
                    <h4>Send us your resume, by filling this application form:</h4>
                    <StepperForm />
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
                        <input type="email" placeholder="Your email address" required>
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
import StepperForm from "@/components/StepperForm.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        AboutNav,
        StepperForm,
        FooterSection,
    }
};
</script>
