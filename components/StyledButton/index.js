import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../StyledButton/styles'

const StyledButton = (props)=>{

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const {type,content,onPress} = props;

    const pressableColor = type==='primary'?{bgColor:'#171A20CC', txtColor:'#FFFFFF'}:{bgColor:'#FFFFFFA6', txtColor:'#171A20'};

    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor:pressableColor.bgColor}]} onPress={onPress}>
                <Text style={[styles.text,{color:pressableColor.txtColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;