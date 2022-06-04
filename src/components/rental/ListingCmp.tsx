import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from "react-native"
import { useSelector } from 'react-redux';
import { ImagesRef } from '../../config/ResourcesRef';
import { NavigatorHook } from './NavigatorHook';
import {NavigatorStyle as style} from './NavigatorStyle';

export const ListingView = (props: any) => {
    const base =  useSelector((state: any) => state.baseReducer);
    // const {
    //     getListingData
    // } : any = NavigatorHook(props);

    const [listData, setListData] = useState();
    useEffect(() => {
        //console.log('data-received',base.listingData);
        setListData(base.listingData);
    });

    const renderSeparator = () => {
        return (
            <View style={style.listing_item_separator}/>
        )
    }

    const Item = ({title, subtitle} : any) => (
        <View style={style.listing_item_container}>
            <View>
                <Text style={style.listing_title}>{title}</Text>
                <Text style={style.listing_sub_title}>{subtitle}</Text>
            </View>
            <View style={style.listing_history_container}>
                <Image source={ImagesRef.historyIcon} style={style.listing_img_style}></Image>
            </View>
        </View>
    );

    const renderItem = ({item} : any) => (
        <Item title={item.label} subtitle={item.type}/>
    );

    return (
        <View style={style.listing_container}>
            <FlatList data={listData}
                renderItem={renderItem}
                keyExtractor={
                    item => item.id
                }
                ItemSeparatorComponent={renderSeparator}/>
        </View>
    )
}
