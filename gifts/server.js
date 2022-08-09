const express = require('express')
const db = require('./db')
const app = express()
const port = 8080
const bodyParser = require("body-parser");
const cors = require("cors");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({origin: 'http://localhost:3000'}));

const findquery = async function(){
	try {
		const result = await db.pool.query("select * from gifts");
		return result;
	} catch (err) {
        throw err;
    }
}

const catdata = async function(alldata){
	try {
		const maindata = [];
		for (let i = 0; i < alldata.length; i++) {
			let gid = alldata[i]['Id'];
			let catarr = [];
			const cat = await db.pool.query("select categories.catname from categories LEFT JOIN giftcategory ON categories.cid = giftcategory.catid where giftcategory.giftid ="+gid+" GROUP BY categories.catname");
			if(cat.length > 0){
				for (let j = 0; j < cat.length; j++) {
					catarr.push(cat[j]['catname']);
				}
			}
			maindata.push(catarr);
	    }
	
		if(maindata.length>0){
			alldata.forEach(function(data,i){
				data.Categories=maindata[i];
				//data.Categories="['Dinner', 'Gift', 'Couple', 'Dating',]";
			});
		}
		
		return alldata;
	} catch (err) {
        throw err;
    }
}

app.get('/gifts', async (req, res) => {
	
	const alldata = await findquery();
	if(alldata.length){
		const getdata = await catdata(alldata);
		//console.log(getdata);
	}
	
	res.send(alldata);
});

app.get('/single', async (req, res) => {
	
	const alldata = await findquery();
	if(alldata.length){
		const getdata = await catdata(alldata);
		//console.log(getdata);
	}
	
	res.send(alldata);
});
 
// POST
app.post('/gifts', async (req, res) => {
    let task = req.body;
    try {
        const result = await db.pool.query("insert into tasks (description) values (?)", [task.description]);
        res.send(result);
    } catch (err) {
        throw err;
    }
});
 
app.put('/gifts', async (req, res) => {
    let task = req.body;
    try {
        const result = await db.pool.query("update tasks set description = ?, completed = ? where id = ?", [task.description, task.completed, task.id]);
        res.send(result);
    } catch (err) {
        throw err;
    } 
});
 
app.delete('/tasks', async (req, res) => {
    let id = req.query.id;
    try {
        const result = await db.pool.query("delete from tasks where id = ?", [id]);
        res.send(result);
    } catch (err) {
        throw err;
    } 
});
 
app.listen(port, () => console.log(`Listening on port ${port}`));