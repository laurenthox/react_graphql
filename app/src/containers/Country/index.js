import React, { useContext } from "react";

import store from "../../context";
import { Header, SECTION, Table, TableContent, TableHead, TableHeader, TD, TH, TR } from "../../styles/Country";

const Country = ({ countries }) => {
  const context = useContext(store);
  const { updateCodeAndName } = context;
  const getLanguages = languages => languages.map(language => language.name).join(", ");
  const onCountryClickHandler = (code, name) => updateCodeAndName(code, name);

  return <SECTION>
    <Header>Countries List</Header>
    <TableHeader>
      <Table>
        <TableHead>
          <tr>
            <TH>Name</TH>
            <TH>Located</TH>
            <TH>Currency</TH>
            <TH>Phone code</TH>
            <TH>Languages</TH>
          </tr>
        </TableHead>
      </Table>
    </TableHeader>
    <TableContent>
      <Table>
        <tbody>
        {countries.map(country => {
          return <TR key={ country.code } onClick={() => onCountryClickHandler(country.code, country.name)}>
            <TD>{ country.name }</TD>
            <TD>{ country.continent.name }</TD>
            <TD>{ country.currency }</TD>
            <TD>{ country.phone }</TD>
            <TD>{ getLanguages(country.languages) }</TD>
          </TR>
        })}
        </tbody>
      </Table>
    </TableContent>
  </SECTION>
};

export default Country;
