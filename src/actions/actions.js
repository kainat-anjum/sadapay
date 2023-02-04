export const ADD_ITEM = "Add_Item";
export const EDIT_ITEM = "Edit_Item";
export const DELETE_ITEM = "Delete_Item";

export const editItem = (data) => {
  return {
    type: EDIT_ITEM,
    payload: { items: data },
  };
};

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: { items: data },
  };
};

export const deleteItem = (data) => {
  return {
    type: DELETE_ITEM,
    payload: { items: data },
  };
};
