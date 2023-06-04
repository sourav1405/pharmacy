import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage';
import Second from './Second';
import Middle from './Middle';
import Mid from './Mid';
import Third from './Third';
import Four from './Four';
import Five from './Five';
import Full from './Full';
import Six from './Six';
import Footer from './Footer';
import Ssss from './Ssss';

const App = () => {
  return (
    <div>
      <FrontPage />
      <Middle />
      <Second />
      <Mid />
      <Third />
     <Five />
     <Six />
    <Ssss />
     <Full />
    <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;