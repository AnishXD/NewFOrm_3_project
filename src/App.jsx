import MasterForm from './components/MasterForm';
import DetailsForm from './components/DetailsForm';
import Tables from './components/Tables';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Category & Questions</h1>
      <div className="forms-container">
        <MasterForm />
        <DetailsForm />
      </div>
      <Tables />
    </div>
  );
};

export default App;
