import axios from "axios";

// Action creator

export function fetchList(page = 1, pageSize = 3, keyword='') {
    //actions
    return dispatch => {
        dispatch({
            type: "FETCH_LIST_BEGIN",
        });

        const promise = new Promise((resolove, reject) => {
            const doRequest = axios.get(
                `https://reqres.in/api/users?page=${page}&per_page=${pageSize}&q=${keyword}`
            );
            doRequest.then(res => {
                dispatch({
                    type: 'FETCH_LIST_SUCCESS',
                    data: {
                        items: res.data.data,
                        page,
                        pageSize,
                        total: res.data.total,
                    }
                });
                resolove(res);
            }, error => {
                dispatch({
                    type: 'FETCH_LIST_ERROR',
                    data: { error }
                });
                reject(error)
            })
        });
        return promise;
    }
}

export function fetchUser(id) {
	//actions
	return dispatch => {
		dispatch({
			type: 'FETCH_USER_BEGIN'
		});

		const promise = new Promise((resolove, reject) => {
			const doRequest = axios.get(`https://reqres.in/api/users/${id}`)

			doRequest.then(res => {
				dispatch({
					type: "FETCH_USER_SUCCESS",
          data: res.data,
				});
				resolove(res)
			}, error => {
				dispatch({
					type: 'FETCH_USER_ERROR',
					data: { error }
				});
				reject(error)
			})
		});

		return promise;
	}
}