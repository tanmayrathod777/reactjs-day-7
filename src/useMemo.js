import React ,{useState , useMemo} from "react";
const UseMemo = () => {
    const multicount =() => {
        return count * 10
    }

    const multicountMemo = () => {
        
    }
    const [count , setCount] = useState(0);
    const [item, setItem] = useState(10);
    return (
        <div>
            <h1>count Update : {count}</h1>
            <h1>item Update : {item}</h1>
            <h2>{multicount}</h2>
            <button onClick={() => setCount(count +1)}>Update</button>
            <button onClick={() => setItem(item * 10)}>Update</button>
        </div>
    )
}

export default UseMemo ;