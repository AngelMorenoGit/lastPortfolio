const template_header = document.createElement('template')
template_header.innerHTML=`
<!--SECCION INICIO -->
<section id="header" class="inicio">
    <div class="contenido">
        <header>
            <div class="contenido-header">
                <h1></h1>
                <nav id="nav" class="">
                    <ul id="links">
                        <li><a href="index.html#inicio" class="seleccionado" onclick="seleccionar(this)">INICIO</a></li>
                        <li><a href="index.html#sobremi" onclick="seleccionar(this)">SOBRE MI </a></li>
                        <li><a href="index.html#servicios" onclick="seleccionar(this)">HABILIDADES</a></li>
                        <li><a href="index.html#portfolio" onclick="seleccionar(this)">PORTFOLIO</a></li>
                        <li><a href="index.html#contacto" onclick="seleccionar(this)">CONTACTO</a></li>
                    </ul>
                </nav>
                <div id="icono-nav" onclick="responsiveMenu()">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="redes">
                    <a href="https://www.linkedin.com/in/angel-moreno-6009261a2" target="_blank"><i
                            class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AngelMorenoGit" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/moreno.nomoreno/" target="_blank"><i
                            class="fa-brands fa-instagram-square"></i></a>
                </div>
            </div>
        </header>
    </div>
</section>
`
document.body.appendChild(template_header.content);