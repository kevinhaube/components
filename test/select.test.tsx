import { shallow, mount } from 'enzyme'
import * as React from 'react'
import { Typeahead as BootstrapTypeahead } from 'react-bootstrap-typeahead'

import { Select } from '../src'

const options = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
  { label: 'Option C', value: 'option-c' },
]

describe('Select', () => {
  it('Select renders itself without crashing', () => {
    const selectWrapper = shallow(<Select id="id" options={options} />)
    expect(selectWrapper.find(BootstrapTypeahead)).toHaveLength(1)
  })

  it('Select renders as disabled when the disabled prop is used', () => {
    const selectWrapper = shallow(<Select id="id" options={options} disabled />)
    const bootstratSelect = selectWrapper.find(BootstrapTypeahead)
    expect(bootstratSelect.props().disabled).toEqual(true)
  })

  it('Select renders as invalid when the isInvalid prop is true', () => {
    const selectWrapper = shallow(<Select id="id" options={options} isInvalid />)
    const bootstratSelect = selectWrapper.find(BootstrapTypeahead)
    expect(bootstratSelect.props().isInvalid).toEqual(true)
  })

  it('Select uses the multiple prop', () => {
    const selectWrapper = shallow(<Select id="id" options={options} multiple />)
    const bootstratSelect = selectWrapper.find(BootstrapTypeahead)
    expect(bootstratSelect.props().multiple).toEqual(true)
  })

  it('Select displays provided options', () => {
    const selectWrapper = mount(<Select id="id" options={options} />)
    const inputWrapper = selectWrapper.find('input').at(0)
    inputWrapper.simulate('click')

    const ulWrapper = selectWrapper.find('ul')
    const lis = ulWrapper.find('li')
    expect(lis).toHaveLength(3)
  })
})
