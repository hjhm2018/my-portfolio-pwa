import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";

const Earthquake = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [results, setResults] = useState("");
  const [minMagnitude, setMinMagnitude] = useState("");
  const [maxMagnitude, setMaxMagnitude] = useState("");

  const dateInputRef = useRef(null);

  // const countries = [
  //   "Afghanistan",
  //   "Albania",
  //   "Algeria",
  //   "Andorra",
  //   "Angola",
  //   "Anguilla",
  //   "Antigua and Barbuda",
  //   "Argentina",
  //   "Armenia",
  //   "Aruba",
  //   "Australia",
  //   "Austria",
  //   "Azerbaijan",
  //   "Bahamas",
  //   "Bahrain",
  //   "Bangladesh",
  //   "Barbados",
  //   "Belarus",
  //   "Belgium",
  //   "Belize",
  //   "Benin",
  //   "Bermuda",
  //   "Bhutan",
  //   "Bolivia",
  //   "Bosnia &amp; Herzegovina",
  //   "Botswana",
  //   "Brazil",
  //   "British Virgin Islands",
  //   "Brunei",
  //   "Bulgaria",
  //   "Burkina Faso",
  //   "Burundi",
  //   "Cambodia",
  //   "Cameroon",
  //   "Canada",
  //   "Cape Verde",
  //   "Cayman Islands",
  //   "Chad",
  //   "Chile",
  //   "China",
  //   "Colombia",
  //   "Congo",
  //   "Cook Islands",
  //   "Costa Rica",
  //   "Cote D Ivoire",
  //   "Croatia",
  //   "Cruise Ship",
  //   "Cuba",
  //   "Cyprus",
  //   "Czech Republic",
  //   "Denmark",
  //   "Djibouti",
  //   "Dominica",
  //   "Dominican Republic",
  //   "Ecuador",
  //   "Egypt",
  //   "El Salvador",
  //   "Equatorial Guinea",
  //   "Estonia",
  //   "Ethiopia",
  //   "Falkland Islands",
  //   "Faroe Islands",
  //   "Fiji",
  //   "Finland",
  //   "France",
  //   "French Polynesia",
  //   "French West Indies",
  //   "Gabon",
  //   "Gambia",
  //   "Georgia",
  //   "Germany",
  //   "Ghana",
  //   "Gibraltar",
  //   "Greece",
  //   "Greenland",
  //   "Grenada",
  //   "Guam",
  //   "Guatemala",
  //   "Guernsey",
  //   "Guinea",
  //   "Guinea Bissau",
  //   "Guyana",
  //   "Haiti",
  //   "Honduras",
  //   "Hong Kong",
  //   "Hungary",
  //   "Iceland",
  //   "India",
  //   "Indonesia",
  //   "Iran",
  //   "Iraq",
  //   "Ireland",
  //   "Isle of Man",
  //   "Israel",
  //   "Italy",
  //   "Jamaica",
  //   "Japan",
  //   "Jersey",
  //   "Jordan",
  //   "Kazakhstan",
  //   "Kenya",
  //   "Kuwait",
  //   "Kyrgyz Republic",
  //   "Laos",
  //   "Latvia",
  //   "Lebanon",
  //   "Lesotho",
  //   "Liberia",
  //   "Libya",
  //   "Liechtenstein",
  //   "Lithuania",
  //   "Luxembourg",
  //   "Macau",
  //   "Macedonia",
  //   "Madagascar",
  //   "Malawi",
  //   "Malaysia",
  //   "Maldives",
  //   "Mali",
  //   "Malta",
  //   "Mauritania",
  //   "Mauritius",
  //   "Mexico",
  //   "Moldova",
  //   "Monaco",
  //   "Mongolia",
  //   "Montenegro",
  //   "Montserrat",
  //   "Morocco",
  //   "Mozambique",
  //   "Namibia",
  //   "Nepal",
  //   "Netherlands",
  //   "Netherlands Antilles",
  //   "New Caledonia",
  //   "New Zealand",
  //   "Nicaragua",
  //   "Niger",
  //   "Nigeria",
  //   "Norway",
  //   "Oman",
  //   "Pakistan",
  //   "Palestine",
  //   "Panama",
  //   "Papua New Guinea",
  //   "Paraguay",
  //   "Peru",
  //   "Philippines",
  //   "Poland",
  //   "Portugal",
  //   "Puerto Rico",
  //   "Qatar",
  //   "Reunion",
  //   "Romania",
  //   "Russia",
  //   "Rwanda",
  //   "Saint Pierre &amp; Miquelon",
  //   "Samoa",
  //   "San Marino",
  //   "Satellite",
  //   "Saudi Arabia",
  //   "Senegal",
  //   "Serbia",
  //   "Seychelles",
  //   "Sierra Leone",
  //   "Singapore",
  //   "Slovakia",
  //   "Slovenia",
  //   "South Africa",
  //   "South Korea",
  //   "Spain",
  //   "Sri Lanka",
  //   "St Kitts &amp; Nevis",
  //   "St Lucia",
  //   "St Vincent",
  //   "St. Lucia",
  //   "Sudan",
  //   "Suriname",
  //   "Swaziland",
  //   "Sweden",
  //   "Switzerland",
  //   "Syria",
  //   "Taiwan",
  //   "Tajikistan",
  //   "Tanzania",
  //   "Thailand",
  //   "Timor L'Este",
  //   "Togo",
  //   "Tonga",
  //   "Trinidad & Tobago",
  //   "Tunisia",
  //   "Turkey",
  //   "Turkmenistan",
  //   "Turks & Caicos",
  //   "Uganda",
  //   "Ukraine",
  //   "United Arab Emirates",
  //   "United Kingdom",
  //   "Uruguay",
  //   "Uzbekistan",
  //   "Venezuela",
  //   "Vietnam",
  //   "Virgin Islands (US)",
  //   "Yemen",
  //   "Zambia",
  //   "Zimbabwe",
  // ];

  // const [country, setCountry] = useState("");
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [show, setShow] = useState(false);

  // const handleChange = (e) => {
  //   if (e.target.name === "startDate") {
  //     setStartDate(e.target.value);
  //   }

  //   if (e.target.name === "endDate") {
  //     setEndDate(e.target.value);
  //   }

  //   if (e.target.name === "minMagnitude") {
  //     setMinMagnitude(e.target.value);
  //     console.log(minMagnitude)
  //   }

  //   if (e.target.name === "maxMagnitude") {
  //     setMaxMagnitude(e.target.value);
  //   }

  //   if (e.target.name === "country") {
  //     setCountry(e.target.value);
  //   }
  // };

  const onClick = async () => {
    // console.log(startDate)
    try {
      const response = await fetch(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&minmagnitude=${minMagnitude}&maxmagnitude=${maxMagnitude}`
      );

      const data = await response.json();

      const { features, metadata } = data;

      console.log(data)
      setEarthquakeData(features);
      setResults(metadata.count)
      setShow(true);
    } catch (error) {
      console.log(error);
      setShow(false);
    }
  };

  const magnitudes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container-fluid text-center pt-md-4 pt-sm-1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Earthquake Counter App</title>
        <meta name="description" content="Earthquake Counter App Page" />
      </Helmet>
      <h1 className="p-4 font-weight-bolder bg-dark text-light rounded col-12 col-md-10 mx-auto">
        <span role="img" aria-label="Planet Earth emoji">
          &#127758;
        </span>{" "}
        Earthquake Counter{" "}
        <span role="img" aria-label="Notebook emoji">
          &#128221;
        </span>
      </h1>
      <div className="bg-secondary text-light rounded">
        <label className="p-2" htmlFor="startDate">
          From: &nbsp;
          <input
            className="text-center"
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
            ref={dateInputRef}
            type="date"
            value={startDate}
          />
        </label>

        <label className="p-2" htmlFor="endDate">
          To: &nbsp;
          <input
            className="text-center"
            name="endDate"
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            value={endDate}
          />
        </label>

        <label className="p-2" htmlFor="minMagnitude">
          {" "}
          Min. Magnitude: &nbsp;
          <select onChange={(e) => setMinMagnitude(e.target.value)} name="minMagnitude">
            <option>Min. Magnitude</option>
            {magnitudes.map((magnitude, index) => {
              return (
                <option key={index} value={magnitude}>
                  {magnitude}
                </option>
              );
            })}
          </select>
        </label>
        <label className="p-2" htmlFor="maxMagnitude">
          Max. Magnitude: &nbsp;
          <select onChange={(e) => setMaxMagnitude(e.target.value)} name="maxMagnitude">
            <option>Max. Magnitude</option>
            {magnitudes.map((magnitude, index) => {
              return (
                <option key={index} value={magnitude}>
                  {magnitude}
                </option>
              );
            })}
          </select>
        </label>

        {/* <label className="p-2" htmlFor="country">
          Country: &nbsp;
          <select onChange={(e) => setCountry(e.target.value)} name="country">
            <option>Select a country</option>
            {countries.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </label> */}
      </div>

      {minMagnitude && maxMagnitude && minMagnitude > maxMagnitude && (
        <small className="text-danger">
          Max. magnitude must be higher than Min. Magnitude
        </small>
      )}

      <br />

      <button
        className="btn btn-primary p-2"
        onClick={() => onClick()}
        disabled={
          !startDate ||
          !endDate ||
          !minMagnitude ||
          !maxMagnitude ||
          minMagnitude > maxMagnitude
        }
      >
        Search
      </button>

      {show && <> <div className="mt-2 mb-2"><span className="font-weight-bold">Number of Earthquakes:</span> {results}</div>

        <div className="mt-2 mb-2">The table will display only the first 20 results</div></>}

      <table className="table table-bordered table-dark text-center col-12 col-md-8 rounded mx-auto mt-4 mb-5 pb-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Location</th>
            <th scope="col">Magnitude</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {show && earthquakeData ? (
            earthquakeData.slice(0, 20).map((earthquake, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{earthquake.properties.place}</td>
                <td>
                  {earthquake.properties.mag &&
                    earthquake.properties.mag.toFixed(2)}
                </td>
                <td>
                  {new Date(earthquake.properties.time).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Earthquake;
