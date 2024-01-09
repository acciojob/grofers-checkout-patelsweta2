const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll('.prices');
	let totalPrice = 0;
	priceElements.forEach(priceElement => {
		const price = parseFloat(priceElement.innerText.replace('$', ''));
		totalPrice += isNaN(price) ? 0 : price;
	});

	const totalRow = document.createElement('tr');
	totalRow.innerHTML = `<td>Total Price</td><td>$${totalPrice.toFixed(2)}</td>`;

	const existingTotalRow = document.getElementById('totalRow');
	if(existingTotalRow) {
		existingTotalRow.remove();
	}

	totalRow.id = 'totalRow';

	document.querySelector('#groceryTable tbody').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

