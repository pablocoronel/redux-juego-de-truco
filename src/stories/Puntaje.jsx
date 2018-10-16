import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Puntaje from '../components/Puntaje';

storiesOf('Puntaje', module).add('nos 3, ellos 10', () => (
	<Puntaje puntaje={{ nosotros: 3, ellos: 10 }} />
));
