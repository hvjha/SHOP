export const userLogOut = async(req,res) =>{
    try {
        const tokenOption = {
            httpOnly:true,
            secure:true,
            sameSite : 'None'
        }
        res.clearCookie("token",tokenOption );
        res.status(200).json({
            message:"Logout successfully",
            success:true,
            error:false,
            data:[]
        })
    } catch (error) {
        res.status(400).json({ 
            message:error.message || err,
            error:true,
            success:false,
        })
    }
}