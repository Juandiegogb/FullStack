import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: 12345 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState(0);
  const [toShow, setToShow] = useState(null);

  const finderHandler = (e) => {
    const inputValue = e.target.value;
    setToShow(
      persons.filter((person) =>
        person.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
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
      setToShow(null);
      return;
    }
    alert(`${newName} is already added to phonebook`);
    e.target.reset();
  };

  return (
    <div>
      <h2>Search</h2>
      <Finder customOnChange={finderHandler} />
      <h2>Phonebook</h2>
      <AddContactForm
        inputNameHandler={nameHandler}
        onSubmitForm={handleSubmit}
        inputPhoneHandler={phoneHandler}
      />
      <h2>Contacts</h2>
      <Contacts toShow={toShow} persons={persons} />
    </div>
  );
};
export default App;

const Finder = ({ customOnChange }) => (
  <input type="text" placeholder="Filter contacts" onChange={customOnChange} />
);

const AddContactForm = ({
  onSubmitForm,
  inputNameHandler,
  inputPhoneHandler,
}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        name: <input onChange={inputNameHandler} required />
        Phone: <input type="tel" onChange={inputPhoneHandler} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Contacts = ({ toShow, persons }) => {
  return toShow
    ? toShow.map((person, i) => (
        <p key={i}>
          <strong>{person.name}</strong> {person.phone}
        </p>
      ))
    : persons.map((person, i) => (
        <p key={i}>
          <strong>{person.name}</strong> {person.phone}
        </p>
      ));
};
