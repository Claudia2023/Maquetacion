const Contacto = {
    template: `<div class="columns-container">
    <div id="slider_row">
        <div id="top_column" class="center_column"></div>
    </div>
    <div id="columns" class="container">
        <div class="breadcrumb clearfix">
        <router-link to="/" class="home" title="Ir a Inicio">
            <i class="fa fa-home"></i>
        </router-link>  
            <span class="navigation-pipe">&gt;</span>
            Contácto
        </div>
        <div class="row">
            <div class="large-left col-sm-12">
                <div class="row">
                    <div id="center_column" class="center_column col-xs-12 col-sm-12">
                        <h1 class="page-heading bottom-indent">
SERVICIO AL CLIENTE - CONTÁCTENOS</h1>
                        <form action="#" method="post" class="contact-form-box">
                            <fieldset>
                                <h3 class="page-subheading">Enviar su mensaje</h3>
                                <div class="clearfix">
                                    <div class="col-xs-12 col-md-3">                                        
                                        <p id="desc_contact0" class="desc_contact">&nbsp;</p>                                        
                                        <p id="desc_contact1" class="desc_contact contact-title unvisible">
                                            <i class="fa fa-comment-o"></i>
                                            If a technical problem occurs on this website
                                        </p>
                                        <p class="form-group">
                                            <label for="email">Correo Electronico</label>
                                            <input class="form-control grey validate" type="text" id="email"
                                                name="from" data-validate="isEmail" value="">
                                        </p>
                                        <div class="form-group selector1">
                                            <label>Asunto</label>
                                            <input class="form-control grey" type="text" name="id_order" id="id_order" value="">
                                        </div>                                               
                                    </div>
                                    <div class="col-xs-12 col-md-9">
                                        <div class="form-group">
                                            <label for="message">Message</label>
                                            <textarea class="form-control" id="message" name="message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="submit">
                                    <button type="submit" name="submitMessage" id="submitMessage"
                                        class="btn btn-default btn-md">
                                        <span>
                                            Enviar <i class="fa fa-chevron-right right"></i>
                                        </span>
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>                        
            </div>
        </div>
    </div>
</div>`,
    mounted() {
        carousel_status = 0;
        StartView = 1;
        bindGrid();
    }
};