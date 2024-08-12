const User = require("./../db/details");

async function addDetails(detailModel) {
   let detail = new User({
    ...detailModel
   }); 
   await detail.save();
   return detail.toObject();
};
async function getDetails()
{
    const detail = await User.find();
    return detail.map(x => x.toObject());
}
async function getDetail(id)
{
    const detail = await User.findById(id);
    return detail.toObject();
}

async function updateDetail(id,detailModel)
{
    const filter = { _id: id};
    console.log(detailModel);
    return await User.findOneAndUpdate(filter , detailModel,{ new: true });
}

async function deleteDetail(id)
{
    
     await User.findByIdAndDelete(id);
    
}

module.exports = {addDetails , getDetails, getDetail, updateDetail, deleteDetail};