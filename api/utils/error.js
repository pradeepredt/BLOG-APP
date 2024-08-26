export const errorHandler=(stausCode,message)=>{
    const error=new Error();
    error.status=stausCode;
    error.message=message;
    return error;
}