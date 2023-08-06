import { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
   render() {
      const { counters, onDelete, onIncrement, onDecrement, onReset } =
         this.props;
      return (
         <div>
            <button onClick={onReset} className="btn btn-primary m-2">
               Reset
            </button>
            {counters.map((counter) => (
               <Counter
                  key={counter.id}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  counter={counter}
               />
            ))}
         </div>
      );
   }
}

export default Counters;
