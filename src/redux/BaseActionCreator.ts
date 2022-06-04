import { IListItem } from "../components/rental/IListItem";


export const setListingData = (listings : IListItem[] ) => {
    console.info('listings',listings);
    return (dispatch: any)=> {
        dispatch({type:'listing-data', payload:listings})
    }
}


export const setCabSelectedType = (typeSelected : IListItem[] ) => {
    console.info('typeSelected',typeSelected);
    return (dispatch: any)=> {
        dispatch({type:'cab-type', payload:typeSelected})
    }
}
