import useLinked from "./hook/useLinked";

const App = () => {

  const data = useLinked('http://localhost:4444/scrap-silabuz')

  return (
    <>
      <h1 className="mt-4">Prueba Tech Scrapping</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulos</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {
            data.length === 0
            ? <h3>Obteniendo Datos...</h3>
            : data.map((r, i) => (
                <tr>
                  <th scope="row">{ i + 1 }</th>
                  <td>{ r.titulo }</td>
                  <td>{ r.url }</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
