console.log("app.js is running");

var appObject = {
    title: 'Indecision-app',
    subtitle: 'React tutorial',
    options: []
};

// function options(option) {
//     if (option) {
//         return 'here are your options';
//     } else {
//         return 'no options';
//     }
// }
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
     if(option){
         appObject.options.push(option);
         e.target.elements.option.value = '';
     }
     renderTemplate();
        console.log('You have succesfuly submited');
};


const appRoot = document.getElementById('app');

const removeAll= () => {
    appObject.options.length>0?appObject.options = []:'There are no elements to remove';
    renderTemplate();
};
const makeDecision = () =>{
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
};

const renderTemplate = () => {
    var template = (
        <div>
            <h1>AppTitle:{appObject.title}</h1>
    
            {(appObject.subtitle && <h2>AppSubtitle:{appObject.subtitle}</h2>)}
            {<p>{appObject.options.length>0 ? 'here are your options':'no options'}</p>} 
            <button disabled={appObject.options.length == 0}onClick={makeDecision}>what do I do</button>           
            <button onClick={removeAll}>remove all options</button>
            <ol>
            {
                appObject.options.map((option)=> {
                    return <li key={option}>Option:{option}</li>                  
                })
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

}
renderTemplate();

// var templateTwo = (
//     <div>
//     <h1>Charles Motaroki</h1>
//     <p>Age : 20</p>
//     <p>Location : Nairobi</p>
//     </div>
// );
// var appRoot = document.getElementById('app');

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('addOne', count);
// }
// const minusOne = () => {
//     if(count){
//         count--;
//     renderCounterApp();
//     console.log('minusOne', count);
//     }
    
// };
// const reset = () => {   
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1 id="title">count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
    

//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();
