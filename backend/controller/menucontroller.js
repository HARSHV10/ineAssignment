const MenuItems = require('../db/model/meneuItemSchema');


const addItem = async (req ,res)=>{
    const item = req.body;
    item.category=item.category.toLowerCase();
    const number_of_items =await MenuItems.countDocuments({}).then((len)=>{
        return len;
    }).catch((err)=>{
        console.log(err);
    });
    item.item_Id=number_of_items+1;
        const newItem = new MenuItems(item);
        newItem.save().then((item)=>{
            res.status(200).send(item);
        }).catch((err)=>{
            res.status(400).json(err)
        })
}

const getMenuItems =  async (req, res)=>{
    console.log("searching for data in the database . . . ");
    const data = await MenuItems.find({}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(400).json(err);
    })
}

const FilterItems =async (req, res)=>{
    const {category}=req.query;
    /// convert the string to lower
    console.log(category.toLowerCase());
    const data = await MenuItems.find({category:category.toLowerCase()}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).json(err);
    });
    // res.send("Hello")
}

const getFromId = async (req, res)=>{
    const {menu_id}=req.query;
    console.log(menu_id)
    const data = await MenuItems.find({item_Id:menu_id}).then((data)=>{ 
        console.log(data);
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).json(err);
    });
}

module.exports = {addItem, getMenuItems, FilterItems,getFromId};
