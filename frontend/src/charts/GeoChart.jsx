import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";

const Data = [
  ["AD", 10, "Europe"],  // Andorra
  ["AE", 10, "Asia"],  // United Arab Emirates        
  ["AF", 10, "Asia"],  // Afghanistan
  ["AG", 10, "North America"],  // Antigua and Barbuda
  ["AI", 10, "North America"],  // Anguilla
  ["AL", 10, "Europe"],  // Albania
  ["AM", 10, "Asia"],  // Armenia
  ["AO", 10, "Africa"],  // Angola
  ["AQ", 10, "Antarctica"],  // Antarctica
  ["AR", 10, "South America"],  // Argentina
  ["AS", 10, "Oceania"],  // American Samoa
  ["AT", 10, "Europe"],  // Austria
  ["AU", 10, "Oceania"],  // Australia
  ["AW", 10, "North America"],  // Aruba
  ["AX", 10, "Europe"],  // Åland Islands
  ["AZ", 10, "Asia"],  // Azerbaijan
  ["BA", 10, "Europe"],  // Bosnia and Herzegovina
  ["BB", 10, "North America"],  // Barbados
  ["BD", 10, "Asia"],  // Bangladesh
  ["BE", 10, "Europe"],  // Belgium
  ["BF", 10, "Africa"],  // Burkina Faso
  ["BG", 10, "Europe"],  // Bulgaria
  ["BH", 10, "Asia"],  // Bahrain
  ["BI", 10, "Africa"],  // Burundi
  ["BJ", 10, "Africa"],  // Benin
  ["BL", 10, "North America"],  // Saint Barthélemy
  ["BM", 10, "North America"],  // Bermuda
  ["BN", 10, "Asia"],  // Brunei Darussalam
  ["BO", 10, "South America"],  // Bolivia (Plurinational State of)
  ["BQ", 10, "North America"],  // Bonaire, Sint Eustatius and Saba
  ["BR", 10, "South America"],  // Brazil
  ["BS", 10, "North America"],  // Bahamas
  ["BT", 10, "Asia"],  // Bhutan
  ["BV", 10, "Antarctica"],  // Bouvet Island
  ["BW", 10, "Africa"],  // Botswana
  ["BY", 10, "Europe"],  // Belarus
  ["BZ", 10, "North America"],  // Belize
  ["CA", 10, "North America"],  // Canada
  ["CC", 10, "Asia"],  // Cocos (Keeling) Islands
  ["CD", 10, "Africa"],  // Congo (Democratic Republic of the)
  ["CF", 10, "Africa"],  // Central African Republic
  ["CG", 10, "Africa"],  // Congo
  ["CH", 10, "Europe"],  // Switzerland
  ["CI", 10, "Africa"],  // Côte d'Ivoire
  ["CK", 10, "Oceania"],  // Cook Islands
  ["CL", 10, "South America"],  // Chile
  ["CM", 10, "Africa"],  // Cameroon
  ["CN", 10, "Asia"],  // China
  ["CO", 10, "South America"],  // Colombia
  ["CR", 10, "North America"],  // Costa Rica
  ["CU", 10, "North America"],  // Cuba
  ["CV", 10, "Africa"],  // Cabo Verde
  ["CW", 10, "North America"],  // Curaçao
  ["CX", 10, "Asia"],  // Christmas Island
  ["CY", 10, "Asia"],  // Cyprus
  ["CZ", 10, "Europe"],  // Czech Republic
  ["DE", 10, "Europe"],  // Germany
  ["DJ", 10, "Africa"],  // Djibouti
  ["DK", 10, "Europe"],  // Denmark
  ["DM", 10, "North America"],  // Dominica
  ["DO", 10, "North America"],  // Dominican Republic
  ["DZ", 10, "Africa"],  // Algeria
  ["EC", 10, "South America"],  // Ecuador
  ["EE", 10, "Europe"],  // Estonia
  ["EG", 10, "Africa"],  // Egypt
  ["EH", 10, "Africa"],  // Western Sahara
  ["ER", 10, "Africa"],  // Eritrea
  ["ES", 10, "Europe"],  // Spain
  ["ET", 10, "Africa"],  // Ethiopia
  ["FI", 10, "Europe"],  // Finland
  ["FJ", 10, "Oceania"],  // Fiji
  ["FK", 10, "South America"],  // Falkland Islands (Malvinas)
  ["FM", 10, "Oceania"],  // Micronesia (Federated States of)
  ["FO", 10, "Europe"],  // Faroe Islands
  ["FR", 10, "Europe"],  // France
  ["GA", 10, "Africa"],  // Gabon
  ["GB", 10, "Europe"],  // United Kingdom of Great Britain and Northern Ireland
  ["GD", 10, "North America"],  // Grenada
  ["GE", 10, "Asia"],  // Georgia
  ["GF", 10, "South America"],  // French Guiana
  ["GG", 10, "Europe"],  // Guernsey
  ["GH", 10, "Africa"],  // Ghana
  ["GI", 10, "Europe"],  // Gibraltar
  ["GL", 10, "North America"],  // Greenland
  ["GM", 10, "Africa"],  // Gambia
  ["GN", 10, "Africa"],  // Guinea
  ["GP", 10, "North America"],  // Guadeloupe
  ["GQ", 10, "Africa"],  // Equatorial Guinea
  ["GR", 10, "Europe"],  // Greece
  ["GS", 10, "Antarctica"],  // South Georgia and the South Sandwich Islands
  ["GT", 10, "North America"],  // Guatemala
  ["GU", 10, "Oceania"],  // Guam
  ["GW", 10, "Africa"],  // Guinea-Bissau
  ["GY", 10, "South America"],  // Guyana
  ["HK", 10, "Asia"],  // Hong Kong
  ["HM", 10, "Antarctica"],  // Heard Island and McDonald Islands
  ["HN", 10, "North America"],  // Honduras
  ["HR", 10, "Europe"],  // Croatia
  ["HT", 10, "North America"],  // Haiti
  ["HU", 10, "Europe"],  // Hungary
  ["ID", 10, "Asia"],  // Indonesia
  ["IE", 10, "Europe"],  // Ireland
  ["IL", 10, "Asia"],  // Israel
  ["IM", 10, "Europe"],  // Isle of Man
  ["IN", 10, "Asia"],  // India
  ["IO", 10, "Africa"],  // British Indian Ocean Territory
  ["IQ", 10, "Asia"],  // Iraq
  ["IR", 10, "Asia"],  // Iran (Islamic Republic of)
  ["IS", 10, "Europe"],  // Iceland
  ["IT", 10, "Europe"],  // Italy
  ["JE", 10, "Europe"],  // Jersey
  ["JM", 10, "North America"],  // Jamaica
  ["JO", 10, "Asia"],  // Jordan
  ["JP", 10, "Asia"],  // Japan
  ["KE", 10, "Africa"],  // Kenya
  ["KG", 10, "Asia"],  // Kyrgyzstan
  ["KH", 10, "Asia"],  // Cambodia
  ["KI", 10, "Oceania"],  // Kiribati
  ["KM", 10, "Africa"],  // Comoros
  ["KN", 10, "North America"],  // Saint Kitts and Nevis
  ["KP", 10, "Asia"],  // Korea (Democratic People's Republic of)
  ["KR", 10, "Asia"],  // Korea (Republic of)
  ["KW", 10, "Asia"],  // Kuwait
  ["KY", 10, "North America"],  // Cayman Islands
  ["KZ", 10, "Asia"],  // Kazakhstan
  ["LA", 10, "Asia"],  // Lao People's Democratic Republic
  ["LB", 10, "Asia"],  // Lebanon
  ["LC", 10, "North America"],  // Saint Lucia
  ["LI", 10, "Europe"],  // Liechtenstein
  ["LK", 10, "Asia"],  // Sri Lanka
  ["LR", 10, "Africa"],  // Liberia
  ["LS", 10, "Africa"],  // Lesotho
  ["LT", 10, "Europe"],  // Lithuania
  ["LU", 10, "Europe"],  // Luxembourg
  ["LV", 10, "Europe"],  // Latvia
  ["LY", 10, "Africa"],  // Libya
  ["MA", 10, "Africa"],  // Morocco
  ["MC", 10, "Europe"],  // Monaco
  ["MD", 10, "Europe"],  // Moldova (Republic of)
  ["ME", 10, "Europe"],  // Montenegro
  ["MF", 10, "North America"],  // Saint Martin (French part)
  ["MG", 10, "Africa"],  // Madagascar
  ["MH", 10, "Oceania"],  // Marshall Islands
  ["MK", 10, "Europe"],  // Macedonia (the former Yugoslav Republic of)
  ["ML", 10, "Africa"],  // Mali
  ["MM", 10, "Asia"],  // Myanmar
  ["MN", 10, "Asia"],  // Mongolia
  ["MO", 10, "Asia"],  // Macao
  ["MP", 10, "Oceania"],  // Northern Mariana Islands
  ["MQ", 10, "North America"],  // Martinique
  ["MR", 10, "Africa"],  // Mauritania
  ["MS", 10, "North America"],  // Montserrat
  ["MT", 10, "Europe"],  // Malta
  ["MU", 10, "Africa"],  // Mauritius
  ["MV", 10, "Asia"],  // Maldives
  ["MW", 10, "Africa"],  // Malawi
  ["MX", 10, "North America"],  // Mexico
  ["MY", 10, "Asia"],  // Malaysia
  ["MZ", 10, "Africa"],  // Mozambique
  ["NA", 10, "Africa"],  // Namibia
  ["NC", 10, "Oceania"],  // New Caledonia
  ["NE", 10, "Africa"],  // Niger
  ["NF", 10, "Oceania"],  // Norfolk Island
  ["NG", 10, "Africa"],  // Nigeria
  ["NI", 10, "North America"],  // Nicaragua
  ["NL", 10, "Europe"],  // Netherlands
  ["NO", 10, "Europe"],  // Norway
  ["NP", 10, "Asia"],  // Nepal
  ["NR", 10, "Oceania"],  // Nauru
  ["NU", 10, "Oceania"],  // Niue
  ["NZ", 10, "Oceania"],  // New Zealand
  ["OM", 10, "Asia"],  // Oman
  ["PA", 10, "North America"],  // Panama
  ["PE", 10, "South America"],  // Peru
  ["PF", 10, "Oceania"],  // French Polynesia
  ["PG", 10, "Oceania"],  // Papua New Guinea
  ["PH", 10, "Asia"],  // Philippines
  ["PK", 10, "Asia"],  // Pakistan
  ["PL", 10, "Europe"],  // Poland
  ["PM", 10, "North America"],  // Saint Pierre and Miquelon
  ["PN", 10, "Oceania"],  // Pitcairn
  ["PR", 10, "North America"],  // Puerto Rico
  ["PS", 10, "Asia"],  // Palestine, State of
  ["PT", 10, "Europe"],  // Portugal
  ["PW", 10, "Oceania"],  // Palau
  ["PY", 10, "South America"],  // Paraguay
  ["QA", 10, "Asia"],  // Qatar
  ["RE", 10, "Africa"],  // Réunion
  ["RO", 10, "Europe"],  // Romania
  ["RS", 10, "Europe"],  // Serbia
  ["RU", 10, "Europe"],  // Russian Federation
  ["RW", 10, "Africa"],  // Rwanda
  ["SA", 10, "Asia"],  // Saudi Arabia
  ["SB", 10, "Oceania"],  // Solomon Islands
  ["SC", 10, "Africa"],  // Seychelles
  ["SD", 10, "Africa"],  // Sudan
  ["SE", 10, "Europe"],  // Sweden
  ["SG", 10, "Asia"],  // Singapore
  ["SH", 10, "Africa"],  // Saint Helena, Ascension and Tristan da Cunha
  ["SI", 10, "Europe"],  // Slovenia
  ["SJ", 10, "Europe"],  // Svalbard and Jan Mayen
  ["SK", 10, "Europe"],  // Slovakia
  ["SL", 10, "Africa"],  // Sierra Leone
  ["SM", 10, "Europe"],  // San Marino
  ["SN", 10, "Africa"],  // Senegal
  ["SO", 10, "Africa"],  // Somalia
  ["SR", 10, "South America"],  // Suriname
  ["SS", 10, "Africa"],  // South Sudan
  ["ST", 10, "Africa"],  // Sao Tome and Principe
  ["SV", 10, "North America"],  // El Salvador
  ["SX", 10, "North America"],  // Sint Maarten (Dutch part)
  ["SY", 10, "Asia"],  // Syrian Arab Republic
  ["SZ", 10, "Africa"],  // Swaziland
  ["TC", 10, "North America"],  // Turks and Caicos Islands
  ["TD", 10, "Africa"],  // Chad
  ["TF", 10, "Antarctica"],  // French Southern Territories
  ["TG", 10, "Africa"],  // Togo
  ["TH", 10, "Asia"],  // Thailand
  ["TJ", 10, "Asia"],  // Tajikistan
  ["TK", 10, "Oceania"],  // Tokelau
  ["TL", 10, "Asia"],  // Timor-Leste
  ["TM", 10, "Asia"],  // Turkmenistan
  ["TN", 10, "Africa"],  // Tunisia
  ["TO", 10, "Oceania"],  // Tonga
  ["TR", 10, "Europe"],  // Turkey
  ["TT", 10, "North America"],  // Trinidad and Tobago
  ["TV", 10, "Oceania"],  // Tuvalu
  ["TW", 10, "Asia"],  // Taiwan, Province of China
  ["TZ", 10, "Africa"],  // Tanzania, United Republic of
  ["UA", 10, "Europe"],  // Ukraine
  ["UG", 10, "Africa"],  // Uganda
  ["UM", 10, "Oceania"],  // United States Minor Outlying Islands
  ["US", 10, "North America"],  // United States of America
  ["UY", 10, "South America"],  // Uruguay
  ["UZ", 10, "Asia"],  // Uzbekistan
  ["VA", 10, "Europe"],  // Holy See
  ["VC", 10, "North America"],  // Saint Vincent and the Grenadines
  ["VE", 10, "South America"],  // Venezuela (Bolivarian Republic of)
  ["VG", 10, "North America"],  // Virgin Islands (British)
  ["VI", 10, "North America"],  // Virgin Islands (U.S.)
  ["VN", 10, "Asia"],  // Viet Nam
  ["VU", 10, "Oceania"],  // Vanuatu
  ["WF", 10, "Oceania"],  // Wallis and Futuna
  ["WS", 10, "Oceania"],  // Samoa
  ["YE", 10, "Asia"],  // Yemen
  ["YT", 10, "Africa"],  // Mayotte
  ["ZA", 10, "Africa"],  // South Africa
  ["ZM", 10, "Africa"],  // Zambia
  ["ZW", 10, "Africa"],  // Zimbabwe
]

const GeoChart = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);

  const filteredData = selectedContinent
    ? [["Country", "Latitude"],...Data.filter((item) => item[2] === selectedContinent).map(row =>[row[0], row[1]])]
    :[["Country", "Latitude"],...Data.map(row =>[row[0], row[1]])];
  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
  };
  

  // const handleSelect = ({ chartWrapper }) => {
  //   const selectedId = chartWrapper.getChart().getSelection();

  //   if (selectedId.length) {
  //     const selectedIndex = selectedId[0].row + 1;
  //     console.log("Selected Country", Data[selectedIndex]);
  //     // 이전에 선택된 국가의 값을 변경
  //     // 선택된 국가의 값을 변경
  //     updatedData[selectedIndex][1] = 10000;
  //     setBefore(selectedIndex); // 선택된 국가 인덱스를 상태로 업데이트
  //   }
  // };
  // useEffect(() => {
  //   // before 상태가 변경될 때마다 실행됩니다.
  //   console.log('Before updated:', before);
  //   if (before !== 0) {
  //     updatedData[before][1] = 10;
  //   }
  // }, [before]);
  // const chartEvents = [
  //   {
  //     eventName: "select",
  //     callback: handleSelect
  //   }
  // ];
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select value={selectedContinent} onChange={handleContinentChange}>
        <option value="">Select Continent</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        {/* 다른 대륙 옵션들 추가 */}
      </select>
      <Chart
        height={"575px"}
        chartType="GeoChart"
        data={filteredData}
        enableRegionInteractivity={true}
        rootProps={{ "data-testid": "1" }}
        options={{
          backgroundColor: "transparent",
          animation: {
            startup: true,
            duration: 2500
          }
        }}
      />
    </div>
  );
};

export default GeoChart;