export const healthcheck = ( cxt: any ) => {
    cxt.response.body = {
        message: 'All Good! 👍'
    };
}