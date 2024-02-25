function App() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-y-3">
        <h1>Bootles Generator</h1>
        <div>
          <label htmlFor="variants">Variants</label>
          <select name="variants" id="v">
            <option value="hackmon">Hackmon (early 2016-17)</option>
            <option value="early-mav">Early Maverick (2017-2019)</option>
            <option value="mav-v1-lf">
              Maverick v1 - Life Floatie (2018, early 2020)
            </option>
            <option value="mav-v1-vj">
              Maverick v1 - Varsity Jacket (2019)
            </option>
            <option value="mav-v2">Maverick v2 (March 2020-2021)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default App
