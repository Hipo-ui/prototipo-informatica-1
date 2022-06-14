Vue.component('app-header', {
    template: `
    <header class="header">
            <!-- Navbar -->
            <div class="container mx-auto flex flex-row justify-between py-2">
                <a href="./index.html" class="flex flex-row items-center gap-x-4">
                    <img src="./img/logos/escudo-unsij-white.png" alt="" width="60"> <span
                        class="text-xl font-medium py-2 truncate text-white">Licenciatura en Informática</span>
                </a>
                <nav class="flex flex-row items-center">
                    <div class="hidden xl:block">
                        <ul class="flex flex-row gap-x-6 py-2">
                            <li>
                                <slot name="about"></slot>                                
                            </li>
                            <li>
                                <slot name="login-info"></slot>   
                            </li>
                            <li>
                                <slot name="students"></slot>   
                            </li>
                            <li>
                                <slot name="teachers"></slot>   
                            </li>
                            <li>
                                <slot name="contact"></slot>     
                            </li>
                            <li>
                                <slot name="faqs"></slot>    
                            </li>
                        </ul>
                    </div>
                    <div class="xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </nav>
            </div>
            <!-- /Navbar -->


            <!-- Cinta -->
            <div class="brand hidden xl:block">
                <nav class="container mx-auto flex justify-end py-2">
                    <ul class="flex flex-row gap-x-28">
                        <li>
                            <a href="http://www.unsij.edu.mx/webmail/src/login.php"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Correo institucional</a>
                        </li>
                        <li>
                            <a href="https://aula.unsij.edu.mx/moodle/login/index.php"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                Aula virtual</a>
                        </li>
                        <li>
                            <a href="https://alumnos.unsij.edu.mx/user_sessions/new"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                NES</a>
                        </li>
                        <li>
                            <a href="http://lectus.unsij.edu.mx:8080/lectus/"
                                class="flex flex-row gap-x-1 items-center brand-link">
                                <svg xmlns="http://www.w3.org/2000/svg" class="brand-link-icon" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                LECTUS</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- /Cinta -->
        </header>
    `
});


Vue.component('app-footer', {
    template: `
    <footer class="footer">
        <div class="container mx-auto grid md:grid-cols-3 gap-16 justify-center">
            <div class="flex flex-col lg:flex-row gap-8 justify-center items-center">
                <div class="mx-auto">
                    <a href="http://www.unsij.edu.mx/" target="_blank">
                        <img src="./img/logos/escudo-unsij-white.png" alt="" class="h-28 w-auto object-cover">
                    </a>
                </div>
                <div class="mx-auto">
                    <a href="http://www.suneo.mx/" target="_blank">
                        <img src="./img/logos/suneo.png" alt="" class="h-14 w-auto object-cover">
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-8">
                <div>
                    <header class="footer-title">Contacto</header>
                    <hr class="title_line mx-0">
                </div>
                <a href="https://goo.gl/maps/1HaMWs4H2GPHsqrJ7" target="_blank" class="footer-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Camino a la Universidad S/N, 68725 Ixtlán de Juárez, Oax.</a>
                <a href="mailto:informatica@unsij.edu.mx" class="footer-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    informatica@unsij.edu.mx</a>
                <a href="tel:951 553 63 62" class="footer-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    951 553 63 62</a>
            </div>

            <div class="flex flex-col gap-8">
                <div>
                    <header class="footer-title">Síguenos</header>
                    <hr class="title_line mx-0">
                </div>
                <div class="flex flex-row justify-between">
                    <a href="https://www.facebook.com/InformaticaUNSIJ/" target="_blank" class="footer-social_icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="" target="_blank" class="footer-social_icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="" target="_blank" class="footer-social_icon">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="" target="_blank" class="footer-social_icon">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `
})

Vue.component('app-notice', {
    template: `
    <article class="aside_item-notice">
        <header class="aside_item-title">
            <slot name="title"></slot>
        </header>
        <p class="aside_item-description">
            <slot name="description"></slot>
        </p>
        <p class="aside_item-date">
            <svg xmlns="http://www.w3.org/2000/svg" class="aside_item-date-icon"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
            <slot name="date"></slot>
            </span>
        </p>
    </article>
    `
})

Vue.component('app-event', {
    template: `
    <article class="aside_item-event">
        <slot name="image"></slot>        
        <div class="aside_item-content">
            <header class="aside_item-title">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                </div>
                <p><slot name="title"></slot></p>
            </header>
        </div>
    </article>
    `
})

Vue.component('app-work', {
    template: `
    <div class="work_item swiper-slide">
        <div class="work_item-content_image">            
            <slot name="image"></slot>      
        </div>
        <div class="work_item-content_text">
            <header class="subtitle">
                <slot name="title"></slot>
            </header>

            <p class="content_text-dark">
                <slot name="description"></slot>
            </p>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    `
})


Vue.component('app-requirement', {
    template: `
    <div class="requirement_item">
        <div class="requirement_item-content">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="requirement_item-content-icon-svg" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <div class="content_text-dark">
                <slot name="description"></slot>
            </div>
            </p>
        </div>
    </div>
    `
})

Vue.component('app-date', {
    template: `
    <div class="date_item" data-aos="fade-up">
        <div class="date_item-content_icon">
            <div class="date_item-content_icon-form">
                <span class="date_item-content_icon-form-number">
                <slot name="number"></slot>
                </span>
            </div>
        </div>
        <div class="date_item-content_text">
            <p class="content_text-emphasis">
                <slot name="title"></slot>
            </p>
            <p class="content_text-dark">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
    `
})

Vue.component('app-vacant', {
    template: `
    <a href="" class="vacant_item" data-aos="flip-up">
        <div class="vacant_item-content">
            <div>
                <p class="subtitle xl:truncate">
                <slot name="title"></slot>
                </p>
            </div>
            <div>
                <p class="content_text-dark">
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="vacant_item-content-date">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                <slot name="date"></slot>
                </span>
            </div>
        </div>
    </a>
    `
})

Vue.component('app-profile', {
    template: `
    <div class="teacher_item" data-aos="flip-up">
        <a href="" class="teacher_item-link">
            <div class="teacher_item-content_icon">
                <slot name="image"></slot>
            </div>
            <div class="text-center">
                <header class="subtitle">
                    <slot name="name"></slot>
                </header>
            </div>
        </a>
        <div class="teacher_item-text_content-text">
            <p class="teacher_item-text_content-text-email">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                    <slot name="email"></slot>
                </span>
            </p>
        </div>
    </div>
    `
})

new Vue({
    el: '#app'
})