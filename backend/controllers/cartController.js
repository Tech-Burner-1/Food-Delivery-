import userModel from '../models/userModel.js'

//ADD ITEMS IN CART
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Item Added to Cart" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!" });
    }
}

//REMOVE ITEMS FROM CART
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
            await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            res.json({ success: true, message: "Item Removed From cart" });
        }else {
            res.json({success:false,message:"Cart is Empty!"});
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!" });
    }
}

//FETCH USER CART DATA
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error!"});
    }
}

export { addToCart, removeFromCart, getCart };