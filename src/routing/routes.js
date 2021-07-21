import {render} from "react-dom";

export function Home(props) {        
        return(
            <div className="wrapper">
            <h1>Subsidios List</h1>
                <ul>
                    {props.list.map(subsidio => <li key={subsidio.slug}><li>{subsidio.name}</li><ul>{subsidio.child.map(child => <li key={child.slug}>{child.name} {child.parent}</li>)}</ul></li>)}
                </ul>
            </div>
  );
   
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}





