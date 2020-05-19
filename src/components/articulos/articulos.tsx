import React, {Fragment} from 'react';
import './Articulos.scss';

const Articulo = (props:any) =>{
    return(
        <Fragment>
        <div className="col-sm-4 col-md-6 col-xl-4">
        <div className="card mt-3 mx-2 tarjeta" key={props.id}>
                <img src={props.imagen} className="card-img-top" alt="play-4"/>
            <div className="card-body cuerpo">
                <h4 className="card-title text-center titulo-tarjeta">{props.titulo}</h4>
                <p className="card-text descripcion">{props.descripcion}</p>
            </div>
        </div>
    </div>
    
    </Fragment>
    )
}

const Articulos  = () =>{
    const products = [
        {id: 1, imagen:'./Productos/portatil.jpg', titulo: 'Laptop asus 2020', 
        descripcion: 'Disponible en vibrantes combinaciones de colores que desbordan personalidad, el ASUS VivoBook S15 representa un enfoque poco convencional de la vida digital cotidiana. El innovador ASUS ScreenPad™ 2.0 ofrece nuevas formas de trabajar con tu portátil que optimizan tu entorno multitarea'},
        {id: 2, imagen:'./Productos/Audifonos_samsung.png', titulo:'Audifonos samsung',
        descripcion:'Los auriculares diseñados para tu smartphone Samsung, te ofrecen unos bajos más profundos y un sonido más nítido y balanceado gracias a su sistema transductor de 12 mm. Además, cuenta con un micrófono fabricado en material aislante que mejorará la calidad de tus llamadas.'},
        {id: 3, imagen:'./Productos/Celular_samsung.jpg', titulo:'Samsung Galaxy S20',
        descripcion:'es la nueva generación de la compañía surcoreana, un terminal que hace gala de la última tecnología de pantalla con un panel QHD+ con 120 Hz de refresco y 240 Hz de muestreo que monta una triple cámara y el Exynos 990 de ocho núcleos.'},
        {id: 4, imagen:'./Productos/ps4.jpg', titulo:'PlayStation 4 1Tb',
        descripcion:' cuarta videoconsola del modelo PlayStation.8​ Es la segunda consola de Sony hecha por Mark Cerny y forma parte de las videoconsolas de octava generación.Las especificaciones principales de la PS4 son: un disco duro interno de 500GB, 8GB de memoria RAM GDDR5, una CPU AMD x86-64 "Jaguar" de ocho núcleos, un GPU de 1.84 Teraflops AMD Radeon.'},
        {id: 5, imagen:'./Productos/reloj_inteligente.jpg', titulo:'Reloj Inteligente',
        descripcion:'Reloj Digital que tiene multiples funciones. Bonito diseño, gran variedad de funciones bien desarrolladas y un elemento diferenciador del resto de la competencia, precisamente en un apartado que es motivo de queja continua por parte de los usuarios: nada menos que hasta 45 días de autonomía de la batería con un uso normal.'},
        {id: 6, imagen:'./Productos/impresora.jpg', titulo:'Impresora Hp',
        descripcion:'Dispositovo para realizar impresiones de documentos desde el computador o smartphone. Obtenga el rendimiento de una impresora multifuncional productiva a un precio asequible. Imprima, escanee y copie. Obtenga resultados de alta calidad e imprima y escanee desde su teléfono.'}
    ]
    return (
        <Fragment>
            <h3 className="text-center mt-2">Listado de articulos</h3>
            <div className="row">{
                    products.map((item)=>(
                        <Articulo imagen={item.imagen} key={item.id} titulo={item.titulo} 
                        descripcion={item.descripcion}  />
                      
                    ))
                }
            </div>
            <br />
        </Fragment>
    )
}

export default Articulos;