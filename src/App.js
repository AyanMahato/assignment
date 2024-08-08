// src/App.js
import React, { useEffect, useState } from "react";
import { database } from "./firebase.js";
import ComponentX from "./components/componentX.js";
import "./App.css";
import { ref, onValue, off } from "firebase/database";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = ref(database, "items"); // Reference to the 'items' node
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemsArray = [];
      for (let id in data) {
        itemsArray.push({ id, ...data[id] });
      }
      setItems(itemsArray);
    });

    return () => off(itemsRef); // Detach the listener when the component unmounts
  }, []);

  return (
    <div className="App">
      <h1>Dynamic Component Rendering: ComponetX</h1>
      {items.map((item) => (
        <ComponentX key={item.id} data={item} />
      ))}
    </div>
  );
};

export default App;
