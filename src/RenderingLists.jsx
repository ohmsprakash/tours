
import './App.css';

const arr = ["a","b","c"];

function RederingLists() {


  return (
    <div>
      {
        arr.map((e) => {
          return(
            <h1>{e}</h1>
          )
        })
      }
    </div>
  )
}

export default RederingLists;
