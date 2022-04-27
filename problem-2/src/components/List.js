import React from "react";

function List({ list, removeItem }) {
  return (
    <div className="user-list">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="user-name" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
