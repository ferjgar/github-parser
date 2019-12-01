import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Pages } from './Pages';
import Login from './pages/Login';
import Home from './pages/Home';

// TODO: move to bootstrap file
configure({ adapter: new Adapter() });

describe('Pages', () => {
  it('should load login without username', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Pages />
      </MemoryRouter>
    );

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should load home with username', () => {
    // still not very clear how to mock hooks/context
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ username: 'test' }));

    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Pages />
      </MemoryRouter>
    );

    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should redirect to login on 404 without username', () => {
    // still not very clear how to mock hooks/context
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ username: '' }));

    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/blablabla' ]}>
        <Pages />
      </MemoryRouter>
    );

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should redirect to home on 404 with username', () => {
    // still not very clear how to mock hooks/context
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ username: 'test' }));

    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/blablabla' ]}>
        <Pages />
      </MemoryRouter>
    );

    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});

