import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, select, number } from '@storybook/addon-knobs'

import Splash from './Splash'

const colorOptions = {
  yellow: 'yellow',
  blue: 'blue',
}

storiesOf('Splash', module)
  .addParameters({ jest: ['Splash'] })
  .add('Default', () => (
    <Splash
      price={number('price', 149, {}, 'Content')}
      description={text('description', '/md i 24 mdr.', 'Content')}
      color={select('color', colorOptions, colorOptions.yellow, 'Visuals')}
      className={text('className', '', 'Misc')}
    />
  ))
