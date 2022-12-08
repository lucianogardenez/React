import Item from './Item'

const ItemList = (props) => {
    return (
        <>
        {
           props.datos.map(item => <Item key={item.name} />) 
        }
         
        </>
    )
}

export default ItemList