export default function register ({ next, store }){
    if(store.state.user.isAuth){
        return next({
            name: 'Home'
        })
    }
    return next()
}