const initialState = {
		items:[],
		byId: {},
		page: 1,
  	pageSize: 3,
		total: 0,
		fetchListPending: false,
		fetchListError: null,
		listNeedReload: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
		case 'FETCH_LIST_BEGIN':
			return {
				...state,
				fetchListPending: true,
        fetchListError: null,
			}
		case 'FETCH_LIST_SUCCESS':
			const items = [];
			const byId = {};
			action.data.items.forEach(item => {
        items.push(item.id);
        byId[item.id] = item;
      });
			return {
				...state,
        byId,
        items,
        page: action.data.page,
        pageSize: action.data.pageSize,
				total: action.data.total,
				fetchListPending: false,
        fetchListError: null,
			}
		case 'FETCH_LIST_ERROR':
		return {
			...state,
			fetchListPending: false,
			fetchListError: action.data,
		};
		default:
			break;
	}
	return state;
}