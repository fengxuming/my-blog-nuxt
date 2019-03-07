
export default function (context) {
    
    let code = context.req.ctx.request.body.code;
    let redirect = context.redirect;
    let store = context.store;
    if(code == "271828"){
        
        return redirect('/sp/resume')
    }else{
        // store.commit('setCodeIsOk',false)
        if(!code){
            return redirect('/sp/auth')
        }else{
            return redirect('/sp/auth',{
                isOk:false
            })
        }

    }
    
}