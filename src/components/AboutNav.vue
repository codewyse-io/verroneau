<template>
         <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    About us
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul class="slides_down_list">
                                        <li><RouterLink To="/WhoweOur">Who are we ?</RouterLink></li>
                                        <li><RouterLink To="/CareerPage">Careers</RouterLink></li>
                                        <li><RouterLink To="/ContactUs">Contact us</RouterLink></li>
                                        <li><RouterLink To="/DistributeurPage">Our distributors</RouterLink></li>
                                        <li><RouterLink To="/BlogPage">Blog</RouterLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Loyalty programs
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul class="slides_down_list">
                                        <li><RouterLink To="/AdvantagesCard">Advantage card</RouterLink></li>
                                        <li><RouterLink To="/GiftCardPage">Gift card</RouterLink></li>
                                        <li><RouterLink To="/ReviewsPage">Reviews</RouterLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Our politics
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul class="slides_down_list">
                                        <li><RouterLink To="/ShippingPolicy">Shipping policy</RouterLink></li>
                                        <li><RouterLink To="/RefundPolicy">Return and refund policy</RouterLink></li>
                                        <li><RouterLink To="/PrivacyPolicy">Privacy policy</RouterLink></li>
                                        <li><RouterLink To="/CookiesPolicy">Cookie policy</RouterLink></li>
                                        <li><RouterLink To="/TermsOfService">Terms and conditions</RouterLink></li>
                                        <li><RouterLink To="/FAQS">FAQ</RouterLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Commercial partnerships
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul class="slides_down_list">
                                        <li><RouterLink To="/BecomeDistributor">Become a distributor</RouterLink></li>
                                        <li><RouterLink To="/InfluencerCollaborator">Influencers and collaborations</RouterLink></li>
                                        <li><RouterLink To="/DesignerArtitechture">Designers, architects and</RouterLink></li>
                                        <li><RouterLink To="/ContestPage">contest</RouterLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
</template>