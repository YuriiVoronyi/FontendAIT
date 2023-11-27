const root = ReactDOM.createRoot(document.getElementById("root"));

function Cohort() {
    return (
        <div>
            <h1>Cohort 31.2</h1>
        </div>
    )
}

root.render(
// В качестве параметра для метода render() может попасть только один корневой тэг (или фрагмент)
  <>
    <Cohort />
    <Cohort />
    <Cohort />
  </>
);