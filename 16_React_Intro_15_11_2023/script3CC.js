class Cohort extends React.Component {
    render() {
        return (
            <>
                <h1>Cohort 31.2 from Class Component</h1>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // В качестве параметра для метода render() может попасть только один корневой тэг (или фрагмент)
      <>
        <Cohort />
        <Cohort />
        <Cohort />
      </>
    );