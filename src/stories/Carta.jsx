import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Carta from '../components/Carta';

storiesOf('Carta', module)
	.add('3 de Basto', () => <Carta carta={{ numero: 3, palo: 'basto' }} />)
	.add('1 de Espada', () => <Carta carta={{numero: 1, palo: 'espada'}}/>);
