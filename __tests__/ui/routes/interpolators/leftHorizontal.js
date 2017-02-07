import leftHorizontal from 'ui/routes/interpolators/leftHorizontal'

const interpolateMock = jest.fn()
const baseProps = {
  layout: {
    initWidth: 200
  },
  position: {
    interpolate: interpolateMock
  },
  scene: {
    index: 0
  },
  navigationState: {
    index: 0
  }
}

describe('leftHorizontal interpolator tests', () => {
  it('should return a default scene interpolator when the layout is not measured', () => {
    const interpolator = leftHorizontal.scene(baseProps)
    expect(interpolator).not.toBeNull()
    expect(interpolator.opacity).toEqual(1)
    expect(interpolator.transform.length).toEqual(2)
    expect(interpolateMock).not.toHaveBeenCalled()
  })

  it('should return scene interpolator when the layout has been measured and call interpolate where required', () => {
    const props = {
      ...baseProps,
      layout: {
        ...baseProps.layout,
        isMeasured: true
      }
    }

    const interpolator = leftHorizontal.scene(props)
    expect(interpolator).not.toBeNull()
    expect(interpolator.opacity).not.toBeNull()
    expect(interpolator.transform).not.toBeNull()
    expect(interpolator.transform.length).toBe(3)
    expect(interpolateMock).toHaveBeenCalledTimes(3)
    interpolateMock.mockClear()
  })

  it('should return header intrepolator', () => {
    const props = {
      ...baseProps,
      layout: {
        ...baseProps.layout,
        isMeasured: true
      }
    }

    const interpolator = leftHorizontal.header(props)
    expect(interpolator).not.toBeNull()
    expect(interpolator.opacity).not.toBeNull()
    expect(interpolator.transform).not.toBeNull()
    expect(interpolator.transform.length).toBe(1)
    expect(interpolateMock).toHaveBeenCalledTimes(2)
    interpolateMock.mockClear()
  })
})
