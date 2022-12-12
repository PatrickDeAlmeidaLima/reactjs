import MyComponent from "./MyComponent";
import SecondComponent from "./SecondComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu Primeiro Componente</h1>
            <SecondComponent />
            <MyComponent />
        </div>

    )
}

export default FirstComponent;