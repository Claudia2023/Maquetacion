const Lvendidos = {
    template: `<section id="best-sellers_block_right" class="block products_block">
    <h4 class="title_block">
        <a href="javascript:void(0);" title="Ver los productos más vendidos">los mas vendidos</a>
    </h4>
    <div class="block_content">
    <items :Productos="Respuesta"> </items>
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
`,data: function () {
    return {        
        Respuesta: [],
    }
},
props: {
    Producto: {
      type: String,
      required: true
    }
    }, mounted() {
        console.log(this.Producto,"");
        var self = this;
        axios.get('./BuscarMasVendidos?buscar=' + this.Producto)
            .then(function (response) {
                if (response.status === 200) {
                    self.Respuesta = response.data.respuesta;
                   
                }
            });
  }
} 
