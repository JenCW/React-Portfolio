const App = () => {
  // Portfolio Data
  const myName = "Jen Cortez-Walters";
  const bio = "I'm a budding React developer with a passion for building amazing web experiences.";
  const skills = [
    { name: "JavaScript", comfort: 9, frontEnd: true, backend: true },
    { name: "CSS", comfort: 8, frontEnd: true, backend: false },
    { name: "HTML", comfort: 10, frontEnd: true, backend: false },
    { name: "React", comfort: 7, frontEnd: true, backend: false },
  ];

  const contact = {
    email: "jencortezwalters@gmail.com",
    phone: "714.788.4500",
    linkedIn: "https://linkedin.com/in/jen-cortez-walters",
  };

  // Inline Styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
    lineHeight: "1.6",
  };

  const sectionStyle = {
    marginBottom: "40px",
    padding: "20px",
    border: "1px solid #f9f9fa",
    borderRadius: "8px",
    backgroundColor: "#0c0c0c",
    boxShadow: "0 2px 5px rgb(250, 245, 245)",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#faf7f7",
  };

  const listItemStyle = {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#8a8888",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgb(117, 116, 116)",
  };

  return (
    // Defining the Style for the Container
    <div style={containerStyle}>
      {/* Header Section */}
      {/* Defining the Style (css) for the Header which follows */}
      <header style={headingStyle}>
        {/* "myname comes from the const defined above" */}
        <h1>The Portfolio of {myName}</h1>
        <p>{bio}</p>
      </header>

      {/* Skills Section */}
      {/* Defining the Style for the Skills Section Element of the App component */}
      <section style={sectionStyle}>
        {/* Heading for the Section */}
        <h2>Skills</h2>
        {/* Creating an Unordered List */}
        <ul>
          {/* this line of code says for each skill in the const skills array defined above you will do the following */}
          {skills.map((skill, index) => (
            // the next line of code is telling the computer that for each skill in the array, make a list item and give it the listitemsytle defined above
            <li key={index} style={listItemStyle}>
              {/* Displaying the skill name and comfort level that comes from the const defined above */}
              <br />
              {/*the following line says to make the skill name bold and display the comfort level */}
              <strong>{skill.name}</strong> - Comfort: {skill.comfort}/10
              {/*this next line of code says if the frontEnd property is true, display "Front-End" */}
              {skill.frontEnd && "Front-End "}
              {/*this last line of code says if the backend property is true, display "Back-End" */}
              {skill.backend && "Back-End"}
            </li> //end of list item
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      {/* Defining the Style for the Contact Section Element of the App component */}
      <section style={sectionStyle}>
        {/* Heading for the Section */}
        <h2>Contact</h2>
        {/* Displaying the contact information that comes from the const defined above and including a link to the email address */}
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Phone: {contact.phone}</p>
        <p>LinkedIn: <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </section>
    </div>
  );
};

export default App;
