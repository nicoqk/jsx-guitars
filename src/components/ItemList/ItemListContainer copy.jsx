import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";

import { database } from "../../firebaseConfig";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
//import { products } from "../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  /* Cargar datos desde mock a firebase
  const addProduct = () => {
    const productsCollections = collection(database, "products");

    products.map((product) => addDoc(productsCollections, product));
  };*/

  useEffect(() => {
    let consulta;
    const itemCollection = collection(database, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
