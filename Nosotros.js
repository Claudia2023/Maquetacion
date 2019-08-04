const Nosotros = {
    template: `<div class="columns-container">
    <div id="slider_row">
        <div id="top_column" class="center_column"></div>
    </div>
    <div id="columns" class="container">
        <div class="breadcrumb clearfix">
            <a class="home" href="#" title="Return to Home">
                <i class="fa fa-home"></i>
            </a>
            <span class="navigation-pipe">&gt;</span>
            Sobre Nosotros
        </div>
        <div class="row">
            <div class="large-left col-sm-12">
                <div class="row">
                    <div id="center_column" class="center_column col-xs-12 col-sm-12">
                        <div class="rte">
                            <h1 class="page-heading bottom-indent">Sobre Nosotros</h1>
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="cms-block">
                                        <h3 class="page-subheading">Nuestra Compañia</h3>
                                        <p><strong class="dark">Tamos activos hasta la medula osea.</strong></p>
                                        <p>Puro estudiantes coacheados y nacidos para la programacion</p>
                                        <ul class="list-1">
                                            <li><em class="fa fa-check"></em>Los mejores productos de aqui a China</li>
                                            <li><em class="fa fa-check"></em>Te atenderemos con el mejor servicio de
                                                familia</li>
                                            <li><em class="fa fa-check"></em>No hay devoluciones</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="cms-box">
                                        <h3 class="page-subheading"> Nuestro Equipo</h3>
                                        <img src="./img/cms/cms-img.jpg" alt="" width="370" height="192" /><br />
                                        <p><strong class="dark"> Todos estamos certificados por universidades prestigiosas
                                                como: Harvard, Cambridge y MIT.</strong></p>
                                        <p>Ing. Claudia Barrios: Graduada de La universidad experimental del
                                            Tachira<br />Ing. Alejandrina Fonseca: Graduada de la universidad
                                            central<br />Sr. Luis Jimenez: Graduado de la universidad gay
                                            internacional<br />Ing. Julio Mou: Graduado de la universidad de Tsianzi</p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="cms-box">
                                        <h3 class="page-subheading">Proyectos anteriores</h3>
                                        <div class="testimonials">
                                            <div class="inner"><span class="before">“</span>Somos el mejor equipo de
                                                programadores de todo el universo.<span class="after">”</span></div>
                                        </div>
                                        <p><strong class="dark">Certificados por la misma NASA</strong></p>
                                        <div class="testimonials">
                                            <div class="inner"><span class="before">“</span>Somos desarrolladores secundarios de compañias como Apple, Microsoft, Wikipedia, Pio Pio, Uber y La casa rendonda del helado.<span class="after">”</span></div>
                                        </div>
                                        <p><strong class="dark">Manejamos todo tipo de lenguajes desde PHP hasta Swift y otros.</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
 mounted() {
        carousel_status = 0;
        starview = 1;
        bindGrid();
    }
};
