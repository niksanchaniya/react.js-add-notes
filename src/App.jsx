import react,{ useState } from "react";
import ToDoList from "./ToDoList";


const App = () => {

    const[inputList,setInputList] =useState("");
    const[Items,setItems] =useState([]);

    const itemEvent = (event)=>{
        setInputList(event.target.value)
    };
    const listOfItems = ()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        });
        setInputList("");

    };
    const deletItems = (id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })


    };



  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To do list</h1>
          <br/>
          <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
              {/* <li>{inputList}</li> */}
              {Items.map((itemval,index)=>{
                return (<ToDoList key={index} id={index} text={itemval} onSelect={deletItems}/>)
              })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;