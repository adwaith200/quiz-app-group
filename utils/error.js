class Apperror extends Error{
    constructor(message,statuscode)
    {
        super(message);
        this.statusCode=statuscode;
        if(`${statuscode}`.startsWith('500'))
        {
            this.status='error';
        }
        else
        {
            this.status='unsuccessful';
        }
        this.isoperational=true;
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=Apperror;