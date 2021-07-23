import {Carousel} from "bootstrap";
import {render} from "react-dom";

export function Home(props) {        
    render(<ControlledCarousel banner={props.banner} />)
    return(
        <div className="wrapper">
                
            <h1>Subsidios List</h1>
            <List list={props.list} />            
        </div>
    );
}

export function About(props) {
    return <h2>About</h2>;
 
}

export function Users() {
  return <h2>Users</h2>
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

function ControlledCarousel(props) {   
    return (
        <Carousel>
        {props.banner.custom_fields.slider.map( e =>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={e.url}
                alt={e.titulo}
              />
            </Carousel.Item>
        )}
      </Carousel>
    );
  }
  
