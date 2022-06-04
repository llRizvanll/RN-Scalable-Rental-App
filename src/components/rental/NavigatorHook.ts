import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/ActionCreator";
import { IListItem } from "./IListItem";

export const NavigatorHook = (props: any) => {

    const [selectedType,setSelectedType] = useState(props.route.params.selectedType);
    const DEST_PLACEHOLDER = 'Please enter your destination';
    const SRC_PLACEHOLDER = 'Galaxy, Bandra, Mumbai';
    console.log('type-received',props.route.params.selectedType);

    const apiData : any = [
        {
            type: "mini",
            label: "bigbazaar",
            count: 10,
            id: 1
        },
        {
            type: "sedan",
            label: "bigbazaar-trends", 
            count: 10,
            id: 2
        },
        {
            type: "mini",
            label: "big market",
            count: 9,
            id: 3
        },
        {
            type: "sedan",
            label: "bigbazaar",
            count: 2,
            id: 4
        },
        {
            type: "mini",
            label: "bombay bazaar",
            count: 6,
            id: 5
        },
        {
            type: "sedan",
            label: "big-fortis",
            count: 100,
            id: 6
        }
    ];

    const dispatch = useDispatch();

    //dispatchers to base reducers
    const {
        setListingData
    } = bindActionCreators(actionCreators,dispatch);

    const getListingData = () : Promise<any> => {
        return new Promise(resolve => {resolve(apiData)});
    }

    const processTextForBackend = (enteredText : string) => {
        console.log('TEXTPROCESSED ', enteredText);
        if (enteredText.length> 2 ) {
            
            const filteredData : [] = apiData.filter((val: IListItem) => selectedType === val.type && val.label.includes(enteredText));
            const res: [] = filteredData.sort((val:IListItem, val2:IListItem) => val2.count - val.count)
            //console.log('filtered data',filteredData);
            //console.log('sorted',res);
            
            //update the data
            setListingData(res);
        }
        else{
            setListingData([]);
        }
    }

    return{
        DEST_PLACEHOLDER,
        SRC_PLACEHOLDER,
        processTextForBackend,
        getListingData
    }
}