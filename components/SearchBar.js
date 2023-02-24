import {Text, View, Image, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SearchBar(){
    return (
        <View style = {[styles.container, styles.shadowProp]}>
            <Icon name = 'search' size = {24} />
            <View style = {{marginLeft: 20, display: 'flex', flexDirection:'column'}}>
                <Text style = {{fontSize: 16, fontFamily: 'Inter-SemiBold', width: '100%'}}>Search for a room ?</Text>
                <View style = {styles.options}>
                    <Text style = {{color: '#a6a4a4', fontSize: 14, fontFamily: 'Inter-Medium'}}>Khu vực</Text>
                    <Text style = {{color: '#a6a4a4', fontSize: 14, fontFamily: 'Inter-Medium'}}>Diện tích</Text>
                    <Text style = {{color: '#a6a4a4', fontSize: 14, fontFamily: 'Inter-Medium'}}>Mức giá</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 352,
        padding: 5,
        paddingLeft: 20,
        border: '1px solid',
        borderRadius: 20,
        // marginBottom: 10,
        color: 'white',
        marginTop: 30,
    },
    shadowProp: {
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    options: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250
    }
})