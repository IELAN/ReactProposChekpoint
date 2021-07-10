const ActionLink = () => {
    const handleClick = e => {
      e.preventDefault();
      console.log("The link was clicked.");
    };
   
    return (
      <a href="/" onClick={handleClick}>
        Click me
      </a>
    );
   };
   export default ActionLink;