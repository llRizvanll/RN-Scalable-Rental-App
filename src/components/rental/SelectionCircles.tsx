import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from "react-native"
import { CmpStyle as style } from '../HomeCmpStyle';
import { CmpHook } from '../HomeCmpHook';
import { useSelector } from 'react-redux';

export const SelectionCircle = (props: any) => {

    const [selected,setSelected] = useState('mini');
    const base =  useSelector((state: any) => state.baseReducer);
    const {
        type ,
        value,
        min_wait
    } = props.typeSelection;

    const {
        updateSelectedType
    } : any = CmpHook(props);

    useEffect(() => {
        setSelected(base.selectedCabType);
    })

    return(
        <View style={style.type_cicle_container}>
                <Pressable 
                    onPress={() => updateSelectedType(type)}
                    style={selected.toLowerCase() === type.toLowerCase() ? style.type_selected_circle1 : style.type_circle1}
                >
                            <Text style={style.sc_text1}>{min_wait}</Text>
                            <Text style={style.sc_text2}>MIN</Text>
                </Pressable>
                <View style={style.type_value_container}>
                            <Text style={style.sc_text3}>{type}</Text>
                            <Text style={style.sc_text4}>₹{value}</Text>
                </View>
        </View>
    )
}