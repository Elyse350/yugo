const verifyAccess=(requiredRole)=>{
    return async(req,res,next)=>{
        try{
         const {role}=req.user;
         console.log(role, requiredRole);
         if(requiredRole.trim().toLowerCase() !=role.trim().toLowerCase()){
             return res
             .status(401)
             .json({error:"UnAthorized! you dont have access to this api"}) ;                
         }
         return next();
        }
        catch(err){
         console.log(err);
        }
    };
};
export default verifyAccess;