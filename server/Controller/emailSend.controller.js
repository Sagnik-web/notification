exports.emailSend = async(req,res)=>{

    const {email}= req.body
    if(email){
        return res.status(400).json({
            success:false,
            msg:"Email Address Not found."
        })
    }

    res.status(200).json({
        success:true,
        msg:"Successfully Get Email"
    })
}