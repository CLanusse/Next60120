


const sleep = async (timer) => new Promise((resolve) => setTimeout(resolve, timer))

const Ejemplo = async () => {

    await sleep(5000)

    return (
        <div>
            <h2>Hola mundo</h2>
        </div>
    )
}

export default Ejemplo