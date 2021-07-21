export function Home(props) {        
  return(
    <div className="wrapper">
        <h1>Subsidios List</h1>
        <List list={props.list} />            
    </div>
  );
   
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}

function List(props)
{
    return(
        <ul>
            {props.list.map(subsidio => <li key={subsidio.slug}><li>{subsidio.id} | {subsidio.name} | {subsidio.parent}: {<Child list = {subsidio.child}/>}</li></li>)}
        </ul>
    )
}

function Child(props)
{
     return(
        <ul>
            {props.list.map(subsidio => <li key={subsidio.slug}><li>{subsidio.id} - {subsidio.name} - {subsidio.parent }</li></li>)}
        </ul>
    )
}


