const h1 = <h1>Hello World</h1>

export default Exercise1

function Greeting(props) {
    return (
        div className="Greeting">
            <h3>Hello {props.name ? props.name: 'World'}</h3>
            {props.children}
            </div>
    )
}