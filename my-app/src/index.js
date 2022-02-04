import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import Collapse from './components/Collapse';

//shift+alt+a yorum satırı alma
//ctrl shif k-u yorum satırı alma kurtarma
// ctrl c + ctrl h  tümünü seçip isimlendirme className --> classNameName
// <button classNameName='jsxclassName' type="button" style={{padding:"10px",color:"white",backgroundColor:"blue",border:"2px solid yellow",}}>{buttonValue}</button>
 


const App = () => {
  return (
    <div className='container'>

      <div className='row'>

        <div className="card-group w-100">

          <div className='col'>
            <Collapse href="collapseExample1" >
              <Card cardTitle="Card Title I"
                cardText="Lorem Card TextI"
                cardTimed="Uptade 1 min ago"
                cardİmage="https://picsum.photos/id/0/200/300" />
            </Collapse>
          </div>

          <div className='col'>
            <Collapse href="collapseExample2" >
              <Card cardTitle="Card Title 2"
                cardText="Lorem Card Text2"
                cardTimed="Uptade 2 min ago"
                cardİmage="https://picsum.photos/id/10/200/300" />
            </Collapse>
          </div>


          <div className='col'>
            <Collapse href="collapseExample3" >
              <Card cardTitle="Card Title 3"
                cardText="Lorem Card Text3"
                cardTimed="Uptade 3 min ago"
                cardİmage="https://picsum.photos/id/100/200/300" />
            </Collapse>
          </div>

        </div>
      </div>
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
)