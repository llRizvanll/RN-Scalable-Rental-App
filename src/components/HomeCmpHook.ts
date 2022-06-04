import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/ActionCreator";

export const CmpHook = (props: any ) => {
    const dispatch = useDispatch();
    const base =  useSelector((state: any) => state.baseReducer);

    const MINI_OBJECT = {
        type:'MINI',
        value:'200.00',
        min_wait: 3,
    };

    const SEDAN_OBJECT = {
        type:'SEDAN',
        value:'250.00',
        min_wait: 4,
    }

    //dispatchers to base reducers
    const {
        setCabSelectedType
    } = bindActionCreators(actionCreators,dispatch);

    const goToSearch = () => {
        //console.log('goto ',base.selectedCabType.toLowerCase());
        props.navigation.navigate('Search',{selectedType:base.selectedCabType.toLowerCase()});
    }

    const updateSelectedType = (selType: any ) => {
        console.log('selected ',selType.toLowerCase());
        //set selected type
        setCabSelectedType(selType);
    }

    return{
        MINI_OBJECT,
        SEDAN_OBJECT,
        goToSearch,
        updateSelectedType
    };   
}