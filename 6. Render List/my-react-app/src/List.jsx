import propTypes from 'prop-types';

function List(props){
    const items = props.items;
    const category = props.category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical sort
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse alphabetical sort
    // fruits.sort((a, b) => a.calories - b.calories);      Numeric sort
    // fruits.sort((a, b) => b.calories - a.calories);      Reverse numeric sort

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const listItems = items.map((item) => (
      <li key={item.id}>
        {item.name}: &nbsp;{item.calories}
      </li>
    ));

    return(
        <>
            <h3 className="list-cat">
                {category} List
            </h3>
            <ul className="list-items">
                {listItems}
            </ul>
        </>
    );
}

List.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.number,
                name: propTypes.string,
                calories: propTypes.number
            }
        )
    ),
    category: propTypes.string
};

List.defaultProps = {
    items: [],
    category: "Category"
};

export default List;