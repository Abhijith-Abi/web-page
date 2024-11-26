import ButtonGradient from "./components/ButtonGradient";
import Button from "./components/Button";

const App = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>

            <div>
                <Button className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                    Something..
                </Button>
            </div>
            <ButtonGradient />
        </>
    );
};

export default App;
