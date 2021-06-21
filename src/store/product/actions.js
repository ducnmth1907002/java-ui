export async function loadProducts({commit}) {
    commit('fetchProductsBegin')
    fetch('http://127.0.0.1:8089/product')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            commit('fetchProductsSuccess', {
                data: data
            })
        })
}
