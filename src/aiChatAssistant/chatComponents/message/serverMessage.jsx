import { useSelector } from 'react-redux'
import Product from '../product/product'
import './styles/desktop.css'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


function ServerMessage({ data }) {
    const ws = useSelector((state) => state.ws)
    const header = data['response']

    let projects = []
    if (data['projects'].length > 0) {
        const projects = data['proyects']['products']
        products = nlProducts.map(product => (
            <Product key={product.id} product_data={getProductFromId(data['products'], product.id)} comment={product['comment']} />
        ))
    }

    return (
        <div className="serverMessage">
            {data && <Message products={products} header={header} />}
            <div className="line" />
        </div>
    )
}
function Message({ products, header }) {
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]} className='headerServer'>
                {header}
            </Markdown>
            {
                products.length > 0 &&
                <div className='products'>
                    {products}
                </div>
            }
        </div>
    )
}


function getProjectsFromId(id) {
    // Utilizamos find para buscar en el array products
    // find retorna el primer elemento que cumple con la condición especificada
    const projectFound = projects.find(project => String(project.id) === String(id));

    // Si se encuentra un producto, find retornará ese producto,
    // de lo contrario, retornará undefined.
    // Podemos usar || para retornar null en caso de que find retorne undefined.
    return projectFound || null;
}
export default ServerMessage