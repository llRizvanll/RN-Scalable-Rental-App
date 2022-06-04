import { StyleSheet } from "react-native";

export const CmpStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor:'#fff',
    },
    map_container: {
        flex:2,
        backgroundColor:'#558b2f'
    },
    map_img_:{width:'100%',height:'100%',resizeMode:'cover'},
    choice_container : {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#fff',
        shadowColor:'#e0e0e0',
        shadowRadius:20,
        borderColor:'#e0e0e0',
        borderRadius:2,
        borderTopWidth:1,
        borderWidth:2
    },
    type_container : {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        alignContent:'space-between'
    },
    type_cicle_container : {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        alignContent:'space-between'
    },
    type_circle1: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderColor:'#e0e0e0',
        borderWidth:2,
        alignItems:'center',
        backgroundColor: '#fff',
        padding: 5,
        marginBottom:5
    },
    type_selected_circle1: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderColor:'#afb42b',
        borderWidth:2,
        alignItems:'center',
        backgroundColor: '#fff',
        padding: 5,
        marginBottom:5
    },
    type_value_container:{
        alignContent:'center',
        alignItems:'center'
    },
    confirm_btn_container : {alignItems:'center', marginBottom:10},
    confirm_btn_view: {width:'40%',backgroundColor:'#000',height:40, alignItems:'center',justifyContent:'center',padding:10},
    confirm_btn_text: {color:'#afb42b',fontSize:14,fontWeight:'600'},
    sc_text1: {fontSize:26, fontWeight:'600',color:'#afb42b'},
    sc_text2: {fontSize:14, fontWeight:'600',color:'#000'},
    sc_text3: {fontSize:16, fontWeight:'600',color:'#000'},
    sc_text4: {fontSize:26, fontWeight:'600',color:'#000'}
    
});