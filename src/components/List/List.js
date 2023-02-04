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

  const calculatePrice = (item) => {
    const discount = item.priceReduction * 100;
    const discountPrice = (item.price * discount) / 100;
    const salePrice = item.price - discountPrice;
    return salePrice;
  };

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
              <p>{item.name}</p>
              <p>{calculatePrice(item)}</p>
              <p>{item.quantity}</p>
              <div className="offer">
                <p>
                  {item.priceReduction && item.priceReduction > 0
                    ? `${item.priceReduction * 100}% Off!`
                    : ""}
                </p>
              </div>
              <p className="edit-link" onClick={() => editItem(item.id)}>
                edit
              </p>
            </article>
          ))}
      </section>
    </ListStyled>
  );
};
