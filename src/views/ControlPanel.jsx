import React from 'react';
import Counter from '@/views/Counter';
import Summary from '@/views/Summary';

class ControlPanel extends React.Component {

  render(){
    const counterStyle = {
      margin:'20px'
    }
    console.log('enter render ControlPanel');
    return (
      <div style={counterStyle}>
        <Counter caption="First" initValue={0} />
        <Counter caption="Second" initValue={0} />
        <Counter caption="Third" initValue={20} />
        <Summary />
        <button onClick={() => this.forceUpdate()}>
          Click me to repaint!
        </button>
      </div>
    )
  }
}
export default ControlPanel;