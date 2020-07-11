import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id:string;

  constructor( private route: ActivatedRoute,
                public productoServices: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
        
        this.productoServices.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion )=>{
            this.id = parametros['id'];
            console.log(this.id);
            
            this.producto = producto;    
            //console.log(producto);                
          });
      })
  }

}
