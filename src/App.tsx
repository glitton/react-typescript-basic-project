// import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
  return (
    <main>
      {/* <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' /> */}
      {/* <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href='https://glcodeworks.com'>A link</Button>
      </p> */}
      <Container
        as={Button}
        onClick={() => console.log("you clicked me")}
        type='button'
      >
        Click Me
      </Container>
    </main>
  );
}

export default App;
