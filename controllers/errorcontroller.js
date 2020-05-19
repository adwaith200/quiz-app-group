const casteerr=(err,res)=>{
    err.message='Invalid URL'
    res.json({
        status:err.status,
        error:err,
        message:err.message,
        statusCode:err.statusCode
    });
}

const globalerror=(err,req,res,next)=>{
    err.status=err.status||'error';
    err.statusCode=err.statusCode||500;
    if(err.name==='CastError')
    {
        casteerr(err,res);
    }
    else
    {
        res.json({
            status:err.status,
            error:err,
            message:err.message,
            statusCode:err.statusCode,
        });
    }
}

module.exports=globalerror;