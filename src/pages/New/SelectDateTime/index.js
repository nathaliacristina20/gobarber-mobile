import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container } from './styles';

import DateInput from '~/components/DateInput';

export default function SelectDateTime() {
    const [date, setDate] = useState(new Date());
    return (
        <Container>
            <Background>
                <DateInput date={date} onChange={setDate} />
            </Background>
        </Container>
    );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
    title: 'Selecione o horario',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Icon name="chevron-left" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});
