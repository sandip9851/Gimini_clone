
import './App.css';
import Sidebar from './component/sidebar';
import Main from './component/Main';
import GlobalDataProvider from './store/context';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <GlobalDataProvider>

   
       <div className="App">
      <Sidebar/>
      <Main/>
    </div>

    </GlobalDataProvider>

    
   
  );
}

export default App;
