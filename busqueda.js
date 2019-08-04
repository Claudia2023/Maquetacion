const Search = {
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
            Búsqueda
        </div>
        <div class="row">
            <div class="large-left col-sm-12">
                <div class="row">
                    <div id="center_column" class="center_column col-xs-12 col-sm-9">
                        <h1 class="page-heading  product-listing">
                            Búsqueda&nbsp;
                            <span class="lighter">
                                "{{ModeloBuscar}}"
                            </span>
                            <span class="heading-counter">Se han encontrado {{CountSearch}} resultados.</span>
                        </h1>
                        <div class="content_sortPagiBar">
                            <div class="sortPagiBar clearfix ">
                                <ul class="display hidden-xs">
                                    <li class="display-title">Ver:</li>
                                    <li id="grid">
                                        <a rel="nofollow" href="javascript:void(0);" title="Grid">
                                            <i class="fa fa-th-large"></i>
                                            Grid
                                        </a>
                                    </li>
                                    <li id="list">
                                        <a rel="nofollow" href="javascript:void(0);" title="Lista">
                                            <i class="fa fa-th-list"></i>
                                            Lista
                                        </a>
                                    </li>
                                </ul>
                                <form id="productsSortForm"action="#" class="productsSortForm">
                                    <div class="select selector1">
                                        <label for="selectProductSort">Ordenar por</label>
                                        <select id="selectProductSort" class="selectProductSort form-control">
                                            <option value="position:asc" selected="selected">--</option>
                                            <option value="price:asc">Precio: más bajo primero</option>
                                            <option value="price:desc">Precio: más alto primero</option>
                                            <option value="name:asc">Nombre del producto: de la A a la Z</option>
                                            <option value="name:desc">Nombre del producto: de la Z a la A</option>
                                            <option value="quantity:desc">En Stock</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div class="top-pagination-content clearfix">                                        
                                <div id="pagination" class="pagination clearfix">

                                </div>
                                <div class="product-count">
                                    Mostrando 1 - 4 de {{CountSearch}} items
                                </div>                                        
                            </div>
                        </div>
                        {{Mensaje}}
                        <ul class="product_list grid row">
                            <li class="ajax_block_product col-xs-12 col-sm-6 col-md-3 first-in-line last-line first-item-of-tablet-line first-item-of-mobile-line" v-for="lista in Respuesta">
                            <div class="product-container" itemscope itemtype="https://schema.org/Product">
                                <div class="left-block">
                                    <div class="product-image-container">
                                        <a class="product_img_link"
                                            href="javascript:void(0);"
                                            title="Herramienta Nueva" itemprop="url">
                                            <img class="replace-2x img-responsive"
                                                v-bind:src="lista.Imagen"
                                                alt="{{lista.Producto}}"
                                                title="{{lista.Producto}}"
                                                itemprop="image" />
                                            <img class="img-responsive hover-image" id="thumb-8"
                                                v-bind:src="lista.Imagen2"
                                                alt="{{lista.Producto}}"
                                                title="{{lista.Producto}}"
                                                itemprop="image" />
                                        </a>
                                        <a class="quick-view"
                                            href="javascript:void(0);"
                                            rel="javascript:void(0);">
                                            <span>Ver</span>
                                        </a>
                                        <a class="sale-box"
                                            href="javascript:void(0);">
                                            <span class="sale-label">¡En Venta!</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="right-block">
                                    <h5 itemprop="name">
                                        <a class="product-name"
                                            href="javascript:void(0);"
                                            title="Herramienta Nueva" itemprop="url">
                                            <span class="list-name">{{lista.NombreM}}</span>
                                            <span class="grid-name">{{lista.NombreM}}...</span>
                                        </a>
                                    </h5>
                                    <p class="product-desc" itemprop="description">
                                        <span class="list-desc">{{lista.Descripcion}}</span>
                                        <span class="grid-desc">{{lista.Descripcion}}</span>
                                    </p>
                                    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer"
                                        class="content_price">
                                        <span itemprop="price"
                                            class="price product-price product-price-new">
                                            {{lista.Precio}}</span>
                                        <meta itemprop="priceCurrency" content="USD" />
                                        <span class="old-price product-price">
                                            {{lista.PrecioO}}
                                        </span>
                                        <span class="price-percent-reduction">{{lista.Porcentaje}}</span>
                                    </div>
                                    <div class="button-container">
                                        <span class="ajax_add_to_cart_button btn btn-default disabled">
                                            <span>Agregar al Carrito de Compras</span>
                                        </span>
                                        <a itemprop="url" class="lnk_view btn btn-default" href="javascript:void(0);" title="Ver">
                                            <span>Más</span>
                                        </a>
                                        <div class="functional-buttons">
                                            <div class="compare">
                                                <a class="add_to_compare"
                                                    href="javascript:void(0);"
                                                    data-id-product="2" title="Comparar"></a>
                                            </div>
                                            <div class="wishlist">
                                                <a class="addToWishlist wishlistProd_2" href="javascript:void(0);" rel="2"
                                                    onclick="WishlistCart('wishlist_block_list', 'add', '2', false, 1); return false;"
                                                    title="Agregar a Lista de Deseados">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="color-list-container">
                                        <ul class="color_to_pick_list clearfix">
                                            <li>
                                                <a href="javascript:void(0);"
                                                    id="color_28" class="color_pick"
                                                    style="background:#E84C3D;">
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"
                                                    id="color_29" class="color_pick"
                                                    style="background:#434A54;">
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-flags">
                                    </div>
                                    <span class="availability">
                                        <span class="out-of-stock">
                                            Agotado
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </li>
                        </ul>
                        <div class="content_sortPagiBar">
                            <div class="bottom-pagination-content clearfix">                                        
                                <div id="pagination_bottom" class="pagination clearfix">

                                </div>
                                <div class="product-count">
                                    Mostrando 1 - 4 de {{CountSearch}} items
                                </div>
                            </div>
                        </div>
                    </div>                            
                    <div id="left_column" class="column col-xs-12 col-sm-3">                                                                
                        <section id="best-sellers_block_right" class="block products_block">
                            <h4 class="title_block">
                                <a href="javascript:void(0);" title="Ver los productos más vendidos">los mas vendidos</a>
                            </h4>
                            <div class="block_content">
                                <ul class="block_content products-block">
                                    <li class="clearfix">
                                        <a href="javascript:void(0);"
                                            title="Herramienta 1"
                                            class="products-block-image content_img clearfix">
                                            <img class="replace-2x img-responsive"
                                                src="public/img/Productos/herramientas/1.jpg"
                                                alt="Herramienta 1" />
                                        </a>
                                        <div class="product-content">
                                            <h5>
                                                <a class="product-name"
                                                    href="javascript:void(0);"
                                                    title="Herramienta 1">
                                                    Herramienta 1
                                                </a>
                                            </h5>
                                            <p class="product-description">.........................................</p>
                                            <div class="price-box">
                                                <span class="price">$28.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <a href="javascript:void(0);"
                                            title="Herramienta 2"
                                            class="products-block-image content_img clearfix">
                                            <img class="replace-2x img-responsive"
                                                src="public/img/Productos/herramientas/13.jpg"
                                                alt="Herramienta 2" />
                                        </a>
                                        <div class="product-content">
                                            <h5>
                                                <a class="product-name"
                                                    href="javascript:void(0);"
                                                    title="Herramienta 2">
                                                    Herramienta 2
                                                </a>
                                            </h5>
                                            <p class="product-description">......................................................</p>
                                            <div class="price-box">
                                                <span class="price">$24.00</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="lnk">
                                    <a href="javascript:void(0);" title="All best sellers"
                                        class="btn btn-default btn-sm icon-right">
                                        <span>
                                                Todos los más vendidos
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </section>                               
                        <section id="new-products_block_right" class="block products_block">
                            <h4 class="title_block">
                                <a href="javascript:void(0);" title="New products">Nuevos Productos</a>
                            </h4>
                            <div class="block_content products-block">
                                <ul class="products">
                                    <li class="clearfix">
                                        <a class="products-block-image"
                                            href="javascript:void(0);"
                                            title="Nuevo Producto 1"><img
                                                class="replace-2x img-responsive"
                                                src="public/img/Productos/herramientas/92.jpg"
                                                alt="Nuevo Producto 1" /></a>
                                        <div class="product-content">
                                            <h5>
                                                <a class="product-name" href="javascript:void(0);"
                                                    title="Nuevo Producto 1">Nuevo Producto 1</a>
                                            </h5>
                                            <p class="product-description">.........................................</p>
                                            <div class="price-box">
                                                <span class="price">
                                                    $100.00 </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <a class="products-block-image"
                                            href="javascript:void(0);"
                                            title="Nuevo Producto 2"><img class="replace-2x img-responsive"
                                                src="public/img/Productos/herramientas/99.jpg"
                                                alt="Nuevo Producto 2" /></a>
                                        <div class="product-content">
                                            <h5>
                                                <a class="product-name"
                                                    href="javascript:void(0);"
                                                    title="Nuevo Producto 2">Nuevo Producto 2</a>
                                            </h5>
                                            <p class="product-description">.........................................</p>
                                            <div class="price-box">
                                                <span class="price">
                                                    $115.00 </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div>                                    
                                    <router-link to="/AllProd" class="btn btn-default btn-sm icon-right" title="Todos los Productos">
                                        <span>Todos los productos</span>
                                    </router-link> 
                                </div>
                            </div>
                        </section>
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
        $("select.form-control,input[type='radio'],input[type='checkbox']").uniform();
        this.ModeloBuscar = $("#tm_search_query").val();
    },
    created() {
        this.ModeloBuscar = $("#tm_search_query").val();
        var sef = this;
        axios.get('http://localhost:8080/Buscar?buscar=' + this.ModeloBuscar)
            .then(function (response) {
                if (response.status === 200) {
                    sef.Respuesta = response.data.respuesta;
                    setTimeout(function () {
                        $("ul.product_list.grid>li.first-in-line").attr("style", "clear: none;");
                    }, 200);
                    $("ul.product_list.grid>li.first-in-line").attr("style", "clear: none;");
                    console.log('Axios', sef.Respuesta);
                    if (sef.Respuesta.length == 0) {
                        sef.Mensaje = 'No hay resultados para su busqueda.';
                    }
                    sef.CountSearch = sef.Respuesta.length;
                }
            });
    },
    data: function () {
        return {
            ModeloBuscar: '',
            Respuesta: [],
            Mensaje: '',
            CountSearch: 0
        }
    }
};