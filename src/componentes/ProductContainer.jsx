//rafce
//props propiedades o parametros que nosotros le pasamos a la funcion y podemos usarlo internamente
//Metodologia B al poner nombre a las clases lo hago de una forma mas organizada//
import './ProductContainer.css'

const ProductContainer = (props) => {
  return (
    <section className="products__section"> 
     
        <h1 className="products__title">Nuestros Productos:</h1>
        <div className="products__container">
        {props.children}
        </div>
    </section>
  )
}

export {ProductContainer}


