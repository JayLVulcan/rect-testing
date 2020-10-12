import React from 'react';
import App from '../App'
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import { shallow, mount, render } from 'enzyme';

// test('renders the App components', () => {
//   const appComponent = shallow(<App />);
//   expect(appComponent.find(<CommentBox />))
//     .to.have.length(1);
// });
// uses jsdom, a fake dom, as we are not
// running inside of a browser
// test('renders hi there', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   expect(div).toContain(<CommentBox />);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
  it('renders a <CommentBox /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox)).toHaveLength(1);
  });

  it('renders a <CommentList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList)).toHaveLength(1);
  });

});



