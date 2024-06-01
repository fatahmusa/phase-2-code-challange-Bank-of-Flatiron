import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
//const [transactions, setTransactions ] = useState(null)
//useEffect(() => {
  //fetch("http://localhost:8001/transactions")
  //.then(resp => resp.json())
  //.then(data => setTransactions(data))

//}, [])



  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
