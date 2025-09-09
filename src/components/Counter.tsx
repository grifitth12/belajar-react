import {useCounter} from "../hooks/useCounter"

const Counter = () => {
    const { count, handleIncrement, handleDecrement, handleResetCounter } = useCounter();

    return <div style={{
        display:"flex",
        gap:"16px",
    }}>
        <button onClick={handleDecrement}>
            kurang
        </button>
        <p>{count}</p>
        <button onClick={handleIncrement}> 
            tambah
        </button>
        <button onClick={handleResetCounter}>reset</button>

    </div>
}

export default Counter;