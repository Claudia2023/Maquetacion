const Hogar = {
    template: `
    <div class="columns-container">
            <div id="slider_row" >
                <div id="top_column" class="center_column"></div>
            </div>
    
        <div id="columns" class="container">
                                    <!-- Breadcrumb -->

<div class="breadcrumb clearfix">
<a class="home" href="#" title="Return to Home">
<i class="fa fa-home"></i>
</a>
    <span class="navigation-pipe">&gt;</span>
            Hogar
    </div>

<!-- /Breadcrumb -->
                        
            <div class="row">
                <div class="large-left col-sm-12">
                    <div class="row">
                        <div id="center_column" class="center_column col-xs-12 col-sm-12">



<h1 class="page-heading product-listing">
Lista de&nbsp;Hogar
</h1>
    <div class="description_box rte">
                    <div class="short_desc">
            <p>Todo lo que necesites para mantener tu hogar limpio, lo puedes adquirir justo aqui!</p>
        </div>
        <div class="hide_desc">
            <p>Utencilios especificos para cada necesitad de tu hogar con materiales altamente resistentes.</p>
        </div>
        <a href="#" class="lnk_more" onclick="$(this).prev().slideDown('slow'); $(this).hide();$(this).prev().prev().hide(); return false;" title="More">
            
        </a>
            </div>

    <div class="content_sortPagiBar">
    <div class="sortPagiBar clearfix">
            <ul class="display hidden-xs">
<li class="display-title">Ver:</li>
<li id="grid">
    <a rel="nofollow" href="#" title="Grid">
        <i class="fa fa-th-large"></i>
        Grid
    </a>
</li>
<li id="lista">
    <a rel="nofollow" href="#" title="List">
        <i class="fa fa-th-list"></i>
        Lista
    </a>
</li>
</ul>



    <form id="productsSortForm" action="#" class="productsSortForm">
<div class="select selector1">
    <label for="selectProductSort">Buscar Por</label>
    <select id="selectProductSort" class="selectProductSort form-control">
        <option value="position:asc" selected="selected">--</option>
                            <option value="price:asc">Precio: Bajos primeros</option>
            <option value="price:desc">Precio: Altos primero</option>
                        <option value="name:asc">Nombre del producto: A hasta Z</option>
        <option value="name:desc">Nombre del producto: Z Hasta A</option>
                            <option value="quantity:desc">Disponibles</option>
                        <option value="reference:asc">Referencias: Bajos primero</option>
        <option value="reference:desc">Referencias: Altos primero</option>
    </select>
</div>
</form>

    </div>
    <div class="top-pagination-content clearfix">
<div id="pagination" class="pagination clearfix">
        
    </div>

<div class="product-count">
Encontramos 1 - 1 de 1 productos
    </div>
<!-- /Pagination -->

    </div>
</div>

    

         
                                            




<!-- Products list -->
<ul class="product_list grid row">
            
    
    
                                        <li class="ajax_block_product col-xs-12 col-sm-6 col-md-3 first-in-line last-line first-item-of-tablet-line first-item-of-mobile-line last-mobile-line">
        <div class="product-container" itemscope itemtype="#">
            <div class="left-block">
                <div class="product-image-container">
                    <a class="product_img_link"	href="#" title="Papel higienieco Scott" itemprop="url">
                        <img class="replace-2x img-responsive" src="public/img/productos/mas/arro1.jpg" alt="Papel higienieco Scott" title="Papel higienieco Scott" itemprop="image" />
                                                                                                                                  <img class="img-responsive hover-image" id="thumb-87" src="#img/p/8/7/87-tm_home_default.jpg" alt="Papel higienieco Scott" title="Papel higienieco Scott" itemprop="image" />
    
                    </a>
                                                <a class="quick-view" href="#" rel="#">
                        <span>Quick view</span>
                    </a>
                                                                                                    </div>
                
                
            </div>
            <div class="right-block">
                <h5 itemprop="name">
                                                <a class="product-name" href="#" title="Papel higienieco Scott" itemprop="url" >
                        <span class="list-name">Papel higienieco Scott</span>
                        <span class="grid-name">Papel higienieco Scott</span>
                    </a>
                </h5>

                <p class="product-desc" itemprop="description">
                    <span class="list-desc">Cada hoja de este rollo contienen 3 hojas con la mejor absorcion y comodidad para ti</span>
                    <span class="grid-desc">Cada hoja de este rollo contienen 3 hojas con la mejor absorcion y comodidad para ti</span>
                </p>
                                        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer" class="content_price">
                                                    <span itemprop="price" class="price product-price">
                            $2.50                             </span>
                        <meta itemprop="priceCurrency" content="USD" />
                                                        
                        
                                            </div>
                                        
                                        
                
                
                <div class="button-container">
                                                                                                                            <a class="ajax_add_to_cart_button btn btn-default" href="#index.php?controller=cart&amp;add=1&amp;id_product=15&amp;token=4f76805dccd95fb4eac7c0ed31ec4e57" rel="nofollow" title="Add to cart" data-id-product="15" data-minimal_quantity="1">
                                <span>Add to cart</span>
                            </a>					
                                                                                <a itemprop="url" class="lnk_view btn btn-default" href="#" title="View">
                        <span>More</span>
                    </a>
               
                    
                    
                   <div class="functional-buttons">
                 
                                                    <div class="compare">
                            <a class="add_to_compare" href="#" data-id-product="4" title="Add to Compare"></a>
                        </div>
                                                   <div class="wishlist">
<a class="addToWishlist wishlistProd_4" href="#" rel="4" onclick="WishlistCart('wishlist_block_list', 'add', '4', false, 1); return false;" title="Add to Wishlist">

</a>
</div>
                </div> 
                    
                    
                </div>
                                            
                                        <div class="product-flags">
                                                                                                                                                                    </div>
        
                                                                            <span class="availability">
                                                                    <span class="available-now">
                                    Disponible                                      </span>
                                                            </span>
                                                                    
                                       
            </div>  
        </div><!-- .product-container> -->
    </li>
    </ul>



<div class="content_sortPagiBar">
    <div class="bottom-pagination-content clearfix">

<div id="pagination_bottom" class="pagination clearfix">
        
    </div>

<div class="product-count">
                                                                    Encontramos 1 - 1 de 1 productos
    </div>

    </div>
</div>


                    </div>
                                    </div><!--.large-left-->
            </div><!--.row-->
                                </div><!-- .row -->
        </div><!-- #columns -->
                    </div>` ,
                    mounted() {
                        carousel_status = 0;
                        starview = 1;
                        bindGrid();
                    }

                
}
