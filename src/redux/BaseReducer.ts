const initialState = {
    listingData : {},
    selectedCabType:'mini'
};

export const baseReducer = (state: any = initialState,action: any) => {
    console.info('basereducer',action.payload);
    switch(action.type){
        case 'listing-data':
        return {...state, listingData: action.payload}
        case 'cab-type':
        return {...state, selectedCabType: action.payload}
    }
    return state;
}