<template>
<productDetails />

<section class="pr_revies">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pr_reviews_head">
                    <h2>Clients reviews</h2>
                    <form action="">
                        <div class="row">
                            <div class="col-md-12 ">
                                <div class="rating_field">
                                    <p>How would you rate this product?</p>
                                    <div class="rating"  @change="addMainClass">
                                        <input type="radio" id="star5" name="rating" value="5">
                                        <label for="star5"></label>
                                        <input type="radio" id="star4" name="rating" value="4">
                                        <label for="star4"></label>
                                        <input type="radio" id="star3" name="rating" value="3">
                                        <label for="star3"></label>
                                        <input type="radio" id="star2" name="rating" value="2">
                                        <label for="star2"></label>
                                        <input type="radio" id="star1" name="rating" value="1">
                                        <label for="star1"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 Main_class">
                            <div class="login_field">
                                <label for="Title">Title (optional)</label>
                                <input type="text" name="Title" placeholder="What is the title of your review?" required>
                            </div>
                            <div class="login_field">
                                <label for="title_review">What is the title of your review?</label>
                                <input type="text" name="title_review" placeholder="Tell us what you think of this product..." required>
                            </div>
                            <div class="login_field">
                                <label for="title_review">Attach a photo or video</label>
                                <input type="file" name="title_review" placeholder="video / img" required>
                            </div>
                            <div class="login_field">
                                <label for="name">Name </label>
                                <input type="text" name="name" required>
                            </div>
                            <div class="login_field">
                                <label for="email">Email </label>
                                <input type="email" name="email" required>
                            </div>
                            <div class="login_field">
                                <input type="submit" value="Save Review">
                            </div>
                        </div>
                        <p class="mt-5">There are no contributions yet.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<ProductList />


<section class="shop_confi">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="shop_with_confi_head">
                    <h2>Shop with confidence</h2>
                    <p>Shop online in the comfort of your home.</p>
                    <ul>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>

<script>
import productDetails from "@/components/productDetails.vue"
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue";

export default {
    components: {
        productDetails,
        FooterSection,
        ProductList,
    },
    methods: {
        addMainClass(event) {
        if (event.target.type === 'radio' && event.target.checked) {
            document.querySelector('.Main_class').classList.add('main-added');
        }
    }
    }

};
</script>

<style scoped>
.rating {
    display: inline-block;
}

.rating input {
    display: none;
}

.rating label {
    cursor: pointer;
    width: 25px;
    height: 25px;
    background-image: url('../assets/img/star-empty-icon.webp'); /* Replace with your star image */
    background-size: cover;
}

.rating input:checked + label {
    background-image: url('../assets/img/star-filled-1.png'); /* Replace with your filled star image */
}
.col-md-12.Main_class {
    width: 50%;
    margin: 10px auto 20px;
    opacity: 0;
    height: 60px;
}

.col-md-12.Main_class .login_field {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 20px 0 0 0;
}

.col-md-12.Main_class .login_field label {
    font-size: 18px;
    margin: 0 0 2px 0;
    font-weight: 500;
}

.col-md-12.Main_class .login_field input {
    height: 40px;
}

.col-md-12.Main_class .login_field input[type="submit"] {
    width: 40%;
    background: black;
    color: white;
    border: none;
    font-size: 18px;
    border-radius: 10px;
}

.col-md-12.Main_class.main-added {
    height: auto;
    opacity: 1;
}
section.pr_revies {
    padding: 60px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
}
</style>
