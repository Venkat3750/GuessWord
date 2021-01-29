import React from 'react';
import { findByTestAttr, checkProps} from "./testUtils";
import  {shallow} from 'enzyme';
import Congrats from './Congrats';


const defaultProps = {success : false};


const setup =(props={})=>{
  const  setupProps = {...defaultProps,...props}
    return shallow (<Congrats {...setupProps}/>)
}
test('renders without error',()=>{
const wrapper = setup({success: false});
const component = findByTestAttr (wrapper,'component-congrats');
expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false',()=>{
    const wrapper = setup({success: false});
    const component = findByTestAttr (wrapper,'component-congrats');
    expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` prop is true',()=>{
    const wrapper = setup({success: true});
    const component = findByTestAttr (wrapper,'component-message');
    expect(component.text().length).not.toBe(0);
});
test('does not throw warning with expected props',()=>{
    const expectedProps = setup({success: false});
    checkProps(Congrats, expectedProps);
});