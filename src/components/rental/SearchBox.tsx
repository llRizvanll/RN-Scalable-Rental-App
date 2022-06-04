import React from 'react';
import { TextInput, View } from "react-native"
import { NavigatorHook } from './NavigatorHook';
import { NavigatorStyle as style} from "./NavigatorStyle"

export const SearchBox = (props: any) => {

    const {
        DEST_PLACEHOLDER,
        SRC_PLACEHOLDER,
        processTextForBackend
    } : any = NavigatorHook(props);
    
    return (
        <View style={style.search_box_container}>
            <View style={props.isShapeInGreen? style.search_green_circle : style.search_black_circle}/>
            <View style={style.search_input_container}>
                <TextInput placeholder={props.textIsEditable === false? SRC_PLACEHOLDER : DEST_PLACEHOLDER} 
                           style={style.search_input_text} 
                           placeholderTextColor='#000' editable={props.textIsEditable} 
                           onChangeText={(_text) => processTextForBackend(_text)}/>
            </View>
        </View>
    )
}