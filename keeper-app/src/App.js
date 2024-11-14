import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from  "./Footer";
import Note from "./Note";
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(item => 
        <Note 
          key={item.key}
          title={item.title}
          content={item.content}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;