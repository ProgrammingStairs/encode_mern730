import './App.css';
import Section from './components/Section.js';
function Heading() {
  return (
    <blockquote>
      <h2>Welcome to Create-React-App</h2>
    </blockquote>
  );
}
function Content() {
  return (
    <blockquote>
      <p>This is an example of Create-react-app.</p>
    </blockquote>
  );
}

function App() {
  return (<>
    <Heading/>
    <Content/>
    <Section/>
  </>);
}

export default App;
