/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  // eslint-disable-next-line react/prop-types
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
