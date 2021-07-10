const Welcome2 = props => {
    //console.log(`props:`, props.name);
    return (
      <button onClick={() => props.alertMyInput(`My name is Imane LE ANSARI `)}>
        ClickMe
      </button>
    );
   };
   export default Welcome2;
