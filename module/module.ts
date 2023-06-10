const myModule = (() => {
    // Private variables and functions
    let privateVariable = 'Hello';
  
    function privateFunction() {
      console.log(privateVariable);
    }
  
    // Public API (exposed methods and properties)
    return {
      publicMethod: () => {
        privateFunction();
      },
      publicVariable: 'World'
    };
  })();
  
  myModule.publicMethod(); // Output: Hello
  console.log(myModule.publicVariable); // Output: World
  
  // Private members are not accessible from outside the module
  console.log(myModule.privateVariable); // Output: undefined
  myModule.privateFunction(); // Output: TypeError: myModule.privateFunction is not a function
  