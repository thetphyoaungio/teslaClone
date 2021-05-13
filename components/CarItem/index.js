import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles'

const CarItem = (props) => {
    return (
      <View style={styles.carContainer}>

        <ImageBackground source={require('../../assets/images/cars-tesla.jpg')} style={styles.backageImg} />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton 
        type="primary" 
        content={'custom order'} 
        onPress={()=>{console.warn('Custom Order was pressed')}}
        />

        <StyledButton 
        type="secondary" 
        content={'existing inventary'} 
        onPress={()=>{console.warn('Existing Inventary was pressed')}}
        />
      </View>
    );
};

export default CarItem;