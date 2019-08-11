const Lnuevos = {
    template: `<section id="new-products_block_right" class="block products_block">
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
                    src="./img/Productos/herramientas/92.jpg"
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
                    src="./img/Productos/herramientas/99.jpg"
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
</section>`,
props: {
    Producto: {
      type: String,
      required: true
    }
    }, mounted() {
        console.log(this.Producto,"");
  }
} 
