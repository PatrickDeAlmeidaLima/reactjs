const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
    };

    const renderSometing = (x) =>{
        if(x){
            return <h1>Renderizando isso!!</h1>
        }else{
            return <h2>Também renderizando isso!!</h2>

        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também!!</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir =/");
                    }
                }}
                >Clique aqui por favor!</button>
            </div>
            {renderSometing(true)}
            {renderSometing(false)} 
        </div>

    )
}

export default Events