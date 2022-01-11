export default function usercp_access ({ next, store }){
    if(!store.state.user.isAuth){
        return next({
            name: 'Home'
        })
    }
    return next()
}