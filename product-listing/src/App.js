import './App.css';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App bg-sky-50">
      {/* <h1 className="text-3xl font-[GreatVibes] italic tracking-tight font-bold text-left my-6 ml-4">Product Listing</h1> */}
      <div className="ml-4">
        <ProductListing />
      </div>
    </div>
  )
}

export default App

