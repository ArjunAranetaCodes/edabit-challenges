function cardHide(card) {
	return '*'.repeat(card.length - 4) + card.slice(card.length - 4);
}