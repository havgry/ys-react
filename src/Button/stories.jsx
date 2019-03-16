import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import {
  iconArrowDown,
  iconArrowLeft,
  iconArrowRight,
  iconArrowUp,
  iconCheckMark,
  iconErase,
  iconExclamationMark,
  iconEyeClosed,
  iconEyeOpen,
  iconLogo,
  iconMultiplication,
  iconPlus,
} from '..'

const variants = {
  default: 'default',
  light: 'light',
  cta: 'cta',
  'solid-dark': 'solid-dark',
  'solid-light': 'solid-light',
  'stripped-dark': 'stripped-dark',
  'stripped-light': 'stripped-light',
}

const icons = {
  none: null,
  'arrow-down': iconArrowDown,
  'arrow-left': iconArrowLeft,
  'arrow-right': iconArrowRight,
  'arrow-up': iconArrowUp,
  'check-mark': iconCheckMark,
  erase: iconErase,
  'exclamation-mark': iconExclamationMark,
  'eye-closed': iconEyeClosed,
  'eye-open': iconEyeOpen,
  logo: iconLogo,
  multiplication: iconMultiplication,
  plus: iconPlus,
}

const labelOptions = ['label', 'Label text', 'Content']
const variantOptions = ['variant', variants, variants.default, 'Visuals']
const disabledOptions = ['disabled', false, 'Visuals']
const blockOptions = ['block', false, 'Visuals']
const iconOptions = ['icon', Object.keys(icons), icons.none, 'Visuals']
const iconOnlyOptions = ['iconOnly', false, 'Visuals']
const classNameOptions = ['className', '', 'Misc']

storiesOf('Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Default', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      onClick={action('onClick')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      className={text(...classNameOptions)}
    />
  ))
  .add('Link', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      href={text('href', 'https://yousee.dk', 'Content')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      className={text(...classNameOptions)}
    />
  ))
