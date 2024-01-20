import React, {useState} from "react";




const Basics = () => {
    let [count, setCount] = useState();
    function incCount() {
        setCount(count + 1);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incCount}>Increase</button>
        </div>
    );
}
 export default Basics;