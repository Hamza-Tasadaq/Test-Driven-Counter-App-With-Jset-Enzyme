import { render, screen } from '@testing-library/react';
import Counter from './component/Counter';
import { shallow } from 'enzyme';

describe('Counter Testing', () => {
  test('render the title of counter', () => {
    const wrapper = shallow(<Counter />)
    console.log(wrapper.debug())
    expect(wrapper.find('h1').text()).toContain("This is Counter App")
  });

  test('render button with `increment`', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  })

  test('render intial counter value in a div', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })

  test("render increment button click and increment counter value", () => {
    const wrapper = shallow(<Counter />)
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe('1')
  })

  test("render decrement button click and decrement counter value", () => {
    const wrapper = shallow(<Counter />)
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe('1')
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })

})
