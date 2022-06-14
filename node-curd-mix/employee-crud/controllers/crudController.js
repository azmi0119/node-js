const listData = (req, res) => {
	res.render('index')
}

const addNew = (req, res) => {
	res.send('add Page');
}

const editData = (req, res) => {
	res.send('Edit Page');
}


module.exports = {
	listData,
	addNew,
	editData
}