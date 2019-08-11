const items = {
    template: `<ul class="block_content products-block">
    <li class="clearfix" v-for="Producto in Productos">
        <a href="javascript:void(0);"
            :title="Producto.Nombre"
            class="products-block-image content_img clearfix">
            <img class="replace-2x img-responsive"
            v-bind:src="Producto.Imagen"
                :alt="Producto.Nombre" />
        </a>
        <div class="product-content">
            <h5>
                <a class="product-name"
                    href="javascript:void(0);"
                    :title="Producto.Nombre">
                   {{Producto.Nombre}}
                </a>
            </h5>
            <p class="product-description">{{Producto.Descripcion}} </p>
            <div class="price-box">
                <span class="price">{{Producto.Precio}} </span>
            </div>
        </div>
    </li>
</ul>` , 
props: {
    Productos: {
      type: Array,
      required: true
    }
    }, mounted() {
        console.log(this.Productos,"");
  }
} 
