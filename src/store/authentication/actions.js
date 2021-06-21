export async function loadAccount({commit}, token) {
    commit('fetchAccountBegin')
    commit('fetchAccountSuccess', {
        data: {
            id: 1,
            username: 'ducnm',
            fullName: 'ducnm',
            role: 1,
            status: 1
        }
    })
    // fetch('http://127.0.0.1:8089/login' + token)
    //     .then(response => response.json())
    //     .then((data) => {
    //         commit('fetchStudentSuccess', {
    //             data: data
    //         })
    //     })
}