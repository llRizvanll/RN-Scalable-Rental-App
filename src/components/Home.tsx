import React from 'react';
import { Image, Pressable, Text, View } from "react-native"
import { ImagesRef } from '../config/ResourcesRef';
import { CmpHook } from './HomeCmpHook';
import { CmpStyle as style } from './HomeCmpStyle';
import { SelectionCircle } from './rental/SelectionCircles';

export const Home = (props: any) => {
    const CONFIRM_LABEL = 'CONFIRM PICKUP';
    const {
        MINI_OBJECT,
        SEDAN_OBJECT,
        goToSearch
    }: any = CmpHook(props);

    return(
        <View style={style.container}>
            <View style={style.map_container}>
                <Image source={ImagesRef.mapScreen} style={style.map_img_}/>
            </View>
            <View style={style.choice_container}>
                <View style={style.type_container}>
                    <SelectionCircle typeSelection={MINI_OBJECT}/>
                    <SelectionCircle typeSelection={SEDAN_OBJECT}/>
                </View>
                <Pressable style={style.confirm_btn_container} 
                onPress={()=> goToSearch()}>
                        <View style={style.confirm_btn_view}>
                            <Text style={style.confirm_btn_text}>{CONFIRM_LABEL}</Text>
                        </View>
                </Pressable>
            </View>
        </View>
    )
}

