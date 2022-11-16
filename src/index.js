import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from "./Content/Routing/Routing"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from './App';



const client = new ApolloClient({
  uri: "https://api2.inocyx.com/graphql/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
<BrowserRouter>
<Routing>
<App />
</Routing>

</BrowserRouter>
</ApolloProvider>


   
  </React.StrictMode>
);
