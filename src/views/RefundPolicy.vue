<template>
    <section class="blog_de">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="main_static_b_details about_uspage">
                        <h4>Gift card</h4>
                        <hr>
                        <AboutNav />
                        <hr>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="blog_detailss_content">
                        <h5 class="mt-5">In-store sales</h5>
                    <p>Unused and undamaged merchandise may be returned for a full refund within seven days of purchase. Exchanges will be granted up to 14 days after date of purchase. Products purchased on sale, gift cards, floral arrangements, special orders or products purchased during the Boxing Day period are not eligible for a refund or an exchange.</p>
                    <p>– No refunds will be applied to discounted products and final sales. However, the replacement product(s) are automatically considered as final sale.</p>
                    <p>– No offer can be combined with any other promotion ( Advantage Card, in-store discounted product(s), online promo code, etc.).</p> 
                    <p><b>– During the Boxing Day Sale, no price adjustment is made on sale merchandise purchased at regular price before the promotion begins. The Office de protection du consommateur indicates that the law does not require the merchant to give the discount.</b></p>
                    <hr>
                    <h5 class="mt-3">Online sales and return/refund requests</h5>
                    <p>It is the customer’s responsibility to verify the contents of their order upon receipt of the package. If a product arrives damaged, one or more items are missing, there is an error in your order, or you are not satisfied with your purchase, you must notify us within seven days of receiving your order by completing the form below to make an exchange or obtain a refund. We will then be able to agree on a procedure for the return and refund or to make an exchange. In both cases, however, you must return the products to us within 14 days. Please note, however, that you will have to assume the shipping costs for the return of the merchandise if you are not satisfied with it. All products must be returned in perfect condition, in their original packaging, with all documentation and all parts and accessories in order to obtain full credit. Due to the large number of emails received, please wait to be contacted after submitting the form below.</p>   
                    <p>– No exchange or refund is accepted in store.</p>
                    <p>– No promo code can be applied after the order is placed, due to the volume of orders and the management involved. It is your responsibility to add the promo code at the time of ordering. If you forget to add it, you will be able to use it for a future order.</p>
                    <p>– No offer can be combined with any other promotion (Advantage Card, in-store discounted product(s), online promo code, etc.).</p>
                    <p>– No exchange or refund is accepted on discounted products (marked as Final Sale), gift cards, special orders or sales made during the Boxing Day period.</p>
                    <p>– During a promotion, please note that Décors Véronneau does not refund the difference between the original price and the discounted price when the delay between the purchase of a product and the beginning of a promotion exceeds our return/refund policy, which is seven days. The Office de protection du consommateur also states that the law does not require the merchant to provide the discount.</p>
                    <p><b>This policy does not apply to the Boxing Day Sale; once the sale begins, no price adjustments will be made on sale merchandise purchased at regular price before the promotion begins.</b></p>
                    <hr>
                    <h5 class="mt-3">Precisions for custom online orders</h5>
                    <p>No exchange or refund are accepted (unless a product is broken during delivery or there’s an error in the order*). All special orders are final sales (including green walls, bouquets, handmade trees and any other custom arrangements).</p>
                    <p>It is the customer’s responsibility to verify the dimensions of the desired arrangement before ordering. By proceeding with one of our suggestions, we consider that you have verified and accepted the dimensions, colors, plants used and other relevant details.</p>
                    <p>When you place a special order for a custom product, our craftsmen try to reproduce the image provided as closely as possible. However, because they are handmade, our arrangements may differ slightly from one another. This is what makes them so unique! If you feel that the arrangement you received is too different, Décors Véronneau will analyze your request with your pictures, but reserves the right not to grant your request for return or exchange.</p>
                    <p>* The customer is responsible for verifying the contents of the order upon receipt of the package. You must inform us within seven days of receipt by completing the form below to make an exchange or obtain a refund. A member of our team will contact you within 24 to 48 business hours to authorize the return and provide you with instructions. Once the return is authorized, the product must be returned within 14 days.</p>
                    <div class="main_return_Form">
                        <h5>Return/refund request form</h5>
                        <p>By clicking submit, you agree to our privacy policy.</p>
                        <form action="">
                            <div class="return_fe">
                                <label for="">Order number</label>
                                <input type="text" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Customer's name on the order</label>
                                <input type="text" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Reason for return</label>
                                <textarea type="text" name="order_number" required></textarea>
                            </div>
                            <div class="return_fe">
                                <label for="">If it's a damaged product, please attach a photo</label>
                                <input type="file" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Phone number to reach you</label>
                                <input type="number" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Email address to contact you</label>
                                <input type="email" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <input type="submit" value="Submit">
                            </div>
                        </form>
                    </div>
                    <h5>Cancelling an online order</h5>
                    <p>You can cancel your order at any time before it is processed by sending an email to ecom@veronneau.com</p>
                    <h5>Customer service contact information</h5>
                    <p>You can reach the internet sales customer service department by writing to ecom@veronneau.com. This service is open Monday to Friday from 8am to 4pm.</p>
                    <p>Due to the large number of orders during the months of November and December, especially due to Black Friday and the Cyber Monday, if an inventory error occurs and a product is missing, please note that it will simply be refunded and the rest of your order will be sent to you.</p>
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
    import FooterSection from "@/components/FooterSection.vue"
    
    export default {
        name: 'ProductCategory',
        components: {
          AboutNav,
            FooterSection,
        }
    };
    </script>
    