
function HealthyFood() {
    let foodItems =['Dal','Green','Vegetable','Roti','Salad','Milk'];

    return (
        <>
        <h1 style={{marginLeft: '10px'}}>Healthy Food</h1>
        <ul>
            {foodItems.map((item) => (
                <li style={{marginTop: '5px', paddingLeft: '10px'}}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export default HealthyFood;