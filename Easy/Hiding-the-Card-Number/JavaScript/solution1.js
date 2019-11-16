function cardHide(card) {
	return card.replace(/.(?=.{4,}$)/g, '*')
}