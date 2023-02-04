import React, { useEffect, useState, useContext } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ListStyled } from "./style";
import { AppContext } from "../../context/AppContext";

export const List = () => {
  const [showAddItemDetails, setShowAddItemDetails] = useState(false);
  const [itemToEdit, setItemToEdit] = useState();
  const { state } = useContext(AppContext);
  const [itemsList, setItemsList] = useState();
  const [newItem, setNewItem] = useState(false);

  useEffect(() => {
    setItemsList(state.items);
  }, [state.items]);

  const editItem = (id) => {
    setItemToEdit(id);
    setNewItem(false);
    setShowAddItemDetails(true);
  };

  const addItem = () => {
    setNewItem(true);
    setShowAddItemDetails(true);
  };

  const calculatePrice=(offPrice)=>{
    const salePrice= offPrice < 10
                          ? offPrice * 10
                          : offPrice
                          return salePrice
  }

  return (
    <ListStyled>
      <section className="page-header">
        <h2>Sada Parcel</h2>
        <button className="add-button" onClick={addItem}>
          Add new item
        </button>
      </section>
      {showAddItemDetails && (
        <>
          <ItemDetail
            showAddItemDetails={showAddItemDetails}
            setShowAddItemDetails={setShowAddItemDetails}
            itemId={newItem ? null : itemToEdit}
          />
        </>
      )}
      <section className="list-wrapper">
        <article className="list">
          <h3>Title</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
        </article>
      </section>
      <section className="list-wrapper">
        {itemsList &&
          itemsList.map((item, index) => (
            <article className="list" key={index}>
              {console.log("list on eidt", itemsList, item.priceReduction)}
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <div className="offer">
                <p>
                  {item.priceReduction && item.priceReduction > 0
                    ? `${
                      calculatePrice(item.priceReduction)
                      }% Off!`
                    : ""}
                </p>
              </div>
              {console.log("edit item id", item.id)}
              <p className="edit-link" onClick={() => editItem(item.id)}>
                edit
              </p>
            </article>
          ))}
      </section>
    </ListStyled>
  );
};
