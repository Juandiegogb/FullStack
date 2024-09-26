import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState(0);
  const [findName, setFindName] = useState(null);
  const [filteredPersons, setFilteredPersons] = useState(null);

  const findHandler = (e) => {
    console.log(e.target.value);
    setFindName(e.target.value);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(findName.toLowerCase())
    );
    e.target.value.lenght === ""
      ? setFilteredPersons(null)
      : setFilteredPersons(filtered);
  };

  const nameHandler = (e) => {
    setNewName(e.target.value);
  };

  const phoneHandler = (e) => {
    setNewPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExist = persons.reduce(
      (accum, current) => (accum = current.name === newName),
      false
    );
    if (!userExist) {
      const newPerson = { name: newName, phone: newPhone };
      setPersons([...persons, newPerson]);
      e.target.reset();
      setNewName("");
      console.log(persons);
      return;
    }
    alert(`${newName} is already added to phonebook`);
    e.target.reset();
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" placeholder="Filter contacts" onChange={findHandler} />
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={nameHandler} required />
          Phone: <input type="tel" onChange={phoneHandler} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons
        ? filteredPersons.map((person, i) => (
            <p key={i}>
              <strong>{person.name}</strong> {person.phone}
            </p>
          ))
        : persons.map((person, i) => (
            <p key={i}>
              <strong>{person.name}</strong> {person.phone}
            </p>
          ))}
    </div>
  );
};

export default App;
