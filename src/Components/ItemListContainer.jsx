import { useEffect, useState } from "react";
import { data } from "../Utils/data";
import ItemList from './ItemList';
import { customFetch } from '../utils/customFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        customFetch(2000, data)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    }, []) 
   
    return (
      <ItemList datos={datos} />
    )
}

export default ItemListContainer;