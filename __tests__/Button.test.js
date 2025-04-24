import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Button, InputButton } from '../src/components/common/Buttons'

afterEach(cleanup)

/**
 * @jest-environment ./jest.config.cjs
 */

test('It has to show color rgb(252,99,76) and backgroundcolor rgb(35,245,56)', () => {
  render(
    <div>
      <Button color={"rgb(252,99,76)"} $backgroundcolor={'rgb(35,245,56)'}/>
    </div>
  )
  const buttonClass = Button.styledComponentId
  const buttonRoot = document.getElementsByClassName(buttonClass)
  const style = window.getComputedStyle(buttonRoot[0])
  expect(style.color).toBe("rgb(252, 99, 76)")
  expect(style.backgroundColor).toBe('rgb(35, 245, 56)')
})