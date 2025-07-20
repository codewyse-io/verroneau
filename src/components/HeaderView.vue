<template>
<div class="select_header">
    <div class="top_hea">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="anouce_bar">
                        <RouterLink to=''>25% off on expandable privacy trellises</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="main">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <nav class="navbar navbar-expand-lg for-desktop">

                        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/BlogPage" @click="closeNavbar">Blog</RouterLink>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/InspirationsPage" @click="closeNavbar">InspirationsPage</RouterLink>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory"  @click="closeNavbar">Commercial design</RouterLink>
                                    <button type="button" class="btn  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink class="nav-link" to="/ProductCategory"  @click="closeNavbar">Commercial design service</RouterLink></li>
                                                        <li class="nav-item"><RouterLink class="nav-link" to="/ProductCategory"  @click="closeNavbar">Commercial portfolio</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Custom products</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Business collection - Indoor</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Business collection - Outdoor</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Urban furniture</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas rental</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Quote request</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="cart-ad list_item menue_drawer d-none">
                                <ul>

                                    <li class="nav-item">
                                        <RouterLink to="/LoginPage" class="" @click="closeNavbar"><svg class="svg-inline--fa fa-user" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                                            </svg>Log in
                                            <!-- <i class="fa-solid fa-user"></i> Font Awesome fontawesome.com -->
                                        </RouterLink>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
                <div class="col-md-2">
                    <div class="logo">
                        <RouterLink to="/"> <img src="../assets/img/logo.webp" alt=""></RouterLink>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="cart-ad list_item">
                        <ul>
                            <li class="nav-item">
                                <div id="scroll-container">
                                    <div id="scroll-text">This is scrolling text.</div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">FR</RouterLink>
                            </li>

                            <li class="nav-item">
                                <button type="button" class="btn btn-default navbar-btn" @click="openModal">
                                    <img :src="require('../assets/img/loupe.svg')">

                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <form class="navbar-form" role="search">
                                                    <h2>Search our products</h2>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Search">
                                                        <button class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                    <!-- <button type=".submit" class="btn btn-default">Submit</button> -->
                                                </form>
                                                <div class="close_modal_btn">
                                                    <button type="button" class="close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Store"><img :src="require('../assets/img/map-1.svg')"></RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/MyFavouritePage"><i class="fa-regular fa-heart"></i></RouterLink>
                            </li>
                            <li class="nav-item for_mobile_none">
                                <RouterLink to="/LoginPage"><i class="fa-solid fa-user"></i></RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to=""  @click="toggleCart();" id="offCanvas"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <hr>
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg new_nav ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory"  @click="closeNavbar">New</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Artificial plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Decor</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Artificial flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Garden</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pots and vases</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas decorations</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/Store" @click="closeNavbar">Garden</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Floral stems</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Hanging flower baskets</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower arrangements</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Railing planters</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Centerpieces</RouterLink></li>

                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Greenery stems</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cedars and topiaries</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Boxwood shrubs</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor palm trees</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Potted plants</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by trends</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Modern backyard</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">English countryside</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Provencal garden</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tropical balcony</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor products under $60</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plant trellises</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor planters</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Garden accents</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cleaning products</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Artificial plants</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Potted houseplants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Hanging plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Small tabletop plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor palm trees</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Handmade trees</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pampas and grass</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bonsai trees</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Succulents and cactus</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plant walls</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Greenery stems</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Driftwood and moss</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Driftwood and moss</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Artificial flowers</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Floral stems</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">White flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blue flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Black flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Yellow flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Purple flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Orange flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pink flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Red flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Green flowers</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower arrangements</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower bouquets</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower centerpieces</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Small arrangements</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Large arrangements</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Florist essentials</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cleaning products</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Greenery stems</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wedding bouquets</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Funeral arrangements</RouterLink></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Pots and vases</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower vases</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Glass vases</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Large floor vases</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Small tabletop vases</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor planters</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Small pots and bowls</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Standing planters</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Hanging planters</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Large plant pots</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor planters</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Decor</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <!-- <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower vases</RouterLink></li> -->
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wall art</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cushions and throws</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Home fragrances</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <!-- <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor planters</RouterLink></li> -->
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Decorative accents</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Accent furniture</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Table decor</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wall decor</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Lanterns and candles</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Spring decorations</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Gift ideas</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <!-- <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower vases</RouterLink></li> -->
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plants under $50</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Gift cards</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <!-- <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor planters</RouterLink></li> -->
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plants from $50 and $100</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Teacher</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plants over $100</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Mother's Day</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Sale</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <!-- <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flower vases</RouterLink></li> -->
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Artificial plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Decor</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <!-- <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor planters</RouterLink></li> -->
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Artificial flowers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Garden</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pots and vases</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas decorations</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Christmas</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Indoor decorations</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Artificial plants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Holiday tablescape</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas stockings</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Snowglobes and candles</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas tree skirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Advent calendars and pots</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Nutcrackers, elves and santas</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cushions, blankets and rugs</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas figurines</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas villages</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas ornaments</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">White and cream</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blue and aqua</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Champagne, gold and copper</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Silver and grey</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pink and purple</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Natural and rustic</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Black and brown</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Red and burgundy</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Green</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas tree fillers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Berries and pinecones</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Festive picks</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Spruce and pine</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas flowers</RouterLink></li>
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by theme</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Transitional Christmas</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sparkling Christmas</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Lush Christmas</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Nordic Christmas</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Our best-sellers</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outdoor decorations</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Artificial Christmas trees</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wreaths and garlands</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas arrangements</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas lights</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Gift wrapping and ribbons</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul class="navbar-nav me-auto mb-2 for-mobile d-none">
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory"  @click="closeNavbar">Blog</RouterLink>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/Store" @click="closeNavbar">InspirationsPage</RouterLink>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Commercial design</RouterLink>
                                    <button type="button" class="btn  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Commercial design service</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Commercial portfolio</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Custom products</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Business collection - Indoor</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Business collection - Outdoor</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Urban furniture</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Christmas rental</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Quote request</RouterLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </nav>
                </div>
            </div>
            <div class="search-container d-none">
                <i class="fas fa-search search-icon"></i>
                <input type="text" class="search-box" placeholder="Search">
            </div>
        </div>
    </header>

</div>
<router-view></router-view>
</template>

<script>
import {
    RouterLink
} from 'vue-router';

export default {
    name: 'HeaderView',
    props: {
        msg: String
    },
    components: {
        RouterLink
    },
    data() {
        return {
            isNavbarOpen: false,
        };
    },
    methods: {
        toggleClass() {
            const modal = document.getElementByClassName('dropdown-menu');
            if (modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
            }
        },
        openModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },
        closeModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        },
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        closeNavbar() {
            this.isNavbarOpen = false;
            this.$nextTick(() => {
                if (this.$refs.navbarDropdown) {
                this.$refs.navbarDropdown.classList.remove('show');
        }});
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvas34');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.toggle('is-open');
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>
