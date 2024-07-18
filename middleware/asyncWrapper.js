

const asyncWrapper=(fn)=>{ //asyncWrapper ki definition hai, aw fucntion banaya and usse yahin define kia, fn is a function jo alag se banaenge, but abhi aw me pass kia, baad me call bhi hojaega

  return async(req,res,next)=>{
    try {
      await fn(req,res,next)
    } catch (error) {
      next(error)    
    }
  }
}
export default asyncWrapper;