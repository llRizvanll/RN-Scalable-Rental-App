import {StyleSheet} from "react-native";

export const NavigatorStyle = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column'
    },
    listing_container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#fff'
    },
    listing_item_container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical: 10,
        backgroundColor:'#fff',
        marginLeft: 20,
        paddingLeft: 30
    },
    listing_item: {
        flex:1,
        flexDirection:'column',
        marginVertical: 10,
        backgroundColor:'#fff',
        marginLeft: 20,
        paddingLeft: 30
    },
    listing_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    listing_history_container:{paddingRight:30},
    listing_sub_title:{
        fontSize: 12,
        fontWeight: '400',
        color: '#000'
    },
    listing_item_separator:{
        backgroundColor: '#e0e0e0',
        height: 1
    },
    listing_img_style : {height:24,width:24,resizeMode:'contain'},
    main_search_container:{shadowColor:'#e0e0e0',borderColor:'#e0e0e0',backgroundColor:'#fff',borderBottomWidth:2},
    search_container: {
        flexDirection: 'row',
        maxHeight: 50,
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 5
    },
    search_input_container:{marginLeft:5},
    search_input_text:{color:'#000'},
    search_box_container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        shadowColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:2,
        paddingLeft: 10
    },
    search_green_circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#cddc39',
        padding: 2
    },
    search_black_circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#000',
        padding: 2
    }
});
