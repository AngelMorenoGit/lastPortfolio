const template_footer = document.createElement('template')
template_footer.innerHTML=`
<!-- SECCION FOOTER -->
<footer>
    <div class="redes">
        <a href="https://www.linkedin.com/in/angel-moreno-6009261a2" target="_blank"><i
                class="fab fa-linkedin"></i></a>
        <a href="https://github.com/AngelMorenoGit" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/moreno.nomoreno/" target="_blank"><i
                class="fa-brands fa-instagram-square"></i></a>
    </div>
</footer>
`
document.body.appendChild(template_footer.content);