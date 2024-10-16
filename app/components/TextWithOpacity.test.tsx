import '@testing-library/jest-native/extend-expect';
import { render, screen } from "@testing-library/react-native"

import React from "react"
import { TextWithOpacity } from "./TextWithOpacity"

const testText = "Test string"

describe("TextWithOpacity", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  });
  afterAll(() => {
    jest.useRealTimers()
  });
  it("should render the component", async () => {
    render(<TextWithOpacity text={testText} />)
    expect(screen.getByText(testText)).not.toBeVisible()
    jest.advanceTimersByTime(500)
    screen.rerender(<TextWithOpacity text={testText} />)
    expect(screen.getByTestId('container')).toHaveStyle({
      opacity: 0.5
    })
  })
})
