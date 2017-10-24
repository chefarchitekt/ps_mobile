import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { PricingCard } from 'react-native-elements';

class SignupForm extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <PricingCard
                    
                    color='#4f9deb'
                    title='Free'
                    price='$0'
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />
                <PricingCard
                    
                    color='purple'
                    title='Premium'
                    price='$30'
                    info={['10 Users', 'Premium Support', 'All Core Features']}
                    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />
            </ScrollView>
        );
    }
}

export default SignupForm;

