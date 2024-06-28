import '../App.css'

const ThreMob = (active) => {
    return (
        <div class={active ? "sidebar active" : "sidebar"} id="mobile-sidebar">
            <nav>
                <a class="font-semi-bold text-dtheme" href="/about-us">About Us</a>
                <a class="font-semi-bold text-dtheme" href="https://blog.inito.com">Blog</a>
                <a class="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
                <a class="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
                <a class="font-semi-bold text-dtheme" href="/careers">Careers</a>


            </nav>
        </div>
    )
}

export default ThreMob;