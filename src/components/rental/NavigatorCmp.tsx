import React from 'react';
import {SafeAreaView, View} from "react-native";
import {ListingView} from "./ListingCmp"
import { NavigatorHook } from './NavigatorHook';
import {NavigatorStyle as style} from "./NavigatorStyle"
import {SearchBox} from "./SearchBox"

export const Navigator = (props: any) => {
    const {
        
    }: any = NavigatorHook(props);
    return (
        <SafeAreaView style={style.main}>
            <View style={style.main_search_container}>
                <View style={style.search_container}>
                    <SearchBox textIsEditable={false} isShapeInGreen={false} {...props}/>
                </View>
                <View style={style.search_container}>
                    <SearchBox isShapeInGreen={true} {...props}/>
                </View>
            </View>
            <ListingView {...props}/>
        </SafeAreaView>
    )
};
