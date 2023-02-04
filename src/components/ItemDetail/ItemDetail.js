import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ItemDetailStyled } from "./style";
import { addItem, editItem, deleteItem } from "../../actions/actions";

const INITAL_STATE={
  id: "",
  name: "",
  description: "",
  price: "",
  quantity: "",
  priceReduction: "",
}

export const ItemDetail = (props) => {
  const { setShowAddItemDetails, itemId } = props;
  const { state, dispatch } = useContext(AppContext);
  const [itemDetails, setItemDetails] = React.useState(INITAL_STATE);
  const [newItem, setNewItem] = useState();
  const itemsList = state.items;

  useEffect(() => {
    if (itemId)
      setItemDetails({
        id: itemId,
        name: getItemName(itemId),
        description: getItemDescription(itemId),
        price: getItemPrice(itemId),
        quantity: getItemQuantity(itemId),
        priceReduction: getItemOffer(itemId),
      });
    else {
      setItemDetails(INITAL_STATE);
    }
  }, [itemId]);

  const getItemName = (itemId) => {
    const filteredItem = itemsList.find((i) => i.id === itemId);
    return filteredItem.name;
  };

  const getItemPrice = (itemId) => {
    const filteredItem = itemsList.find((i) => i.id === itemId);
    return filteredItem.price;
  };

  const getItemQuantity = (itemId) => {
    const filteredItem = itemsList.find((i) => i.id === itemId);
    return filteredItem.quantity;
  };

  const getItemDescription = (itemId) => {
    const filteredItem = itemsList.find((i) => i.id === itemId);
    return filteredItem.description;
  };

  const getItemOffer = (itemId) => {
    const filteredItem = itemsList.find((i) => i.id === itemId);
    return filteredItem.priceReduction;
  };

  const onCancel = () => {
    setShowAddItemDetails(false);
  };

  const handleChange = (event) => {
    if (!itemId) {
      setItemDetails({
        ...itemDetails,
        id: `item${Date.now()}`,
        [event.target.name]: event.target.value,
      });
    } else {
      const updatedList = itemsList.map((item) => {
        if (item.id === itemId) {
          setItemDetails({
            ...itemDetails,
            [event.target.name]: event.target.value,
          });
          return { ...itemDetails, [event.target.name]: event.target.value };
        }
        return { ...item };
      });
      setNewItem(updatedList);
    }
  };

  const onSave = () => {
    if (!itemId) {
      const obj = [...itemsList, itemDetails];
      dispatch(addItem(obj));
    } else {
      dispatch(editItem(newItem));
    }
    setShowAddItemDetails(false);
  };

  const onDelete = () => {
    const newList = itemsList.filter((item) => item.id !== itemId);
    dispatch(deleteItem(newList));
    setShowAddItemDetails(false);
  };

  return (
    <ItemDetailStyled>
      <section className="form-wrapper">
        <article>
          <h3>Title</h3>
          <input
            type="text"
            name="name"
            className="input"
            onChange={(e) => handleChange(e)}
            value={itemDetails.name}
          />
        </article>
        <article>
          <h3>Price</h3>
          <input
            type="number"
            name="price"
            className="input"
            onChange={(e) => handleChange(e)}
            value={itemDetails.price}
          />
        </article>
        <article>
          <h3>Quantity</h3>
          <input
            type="number"
            name="quantity"
            className="input"
            onChange={(e) => handleChange(e)}
            value={itemDetails.quantity}
          />
        </article>
        <article>
          <h3>Sale Offer</h3>
          <input
            type="number"
            name="priceReduction"
            className="input"
            onChange={(e) => handleChange(e)}
            value={itemDetails.priceReduction}
          />
        </article>
      </section>

      <section className="actions-wrapper">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button className="save-button" onClick={onSave}>
          Save
        </button>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </section>
    </ItemDetailStyled>
  );
};
