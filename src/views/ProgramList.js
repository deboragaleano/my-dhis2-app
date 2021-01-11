import React from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { Menu, MenuItem, Button } from "@dhis2/ui-core";

const query = {
  programs: {
    resource: "programs",
    params: {
      fields: ["id", "displayName"],
    },
    paging: "false",
  },
};

export default function ProgramList() {
  const { loading, error, data } = useDataQuery(query);

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  const programs = data.programs.programs;

  return (
    <div>
      <h1>Programs' List</h1>  
      <Menu>
        {programs.map((program) => (
          <MenuItem key={program.id} label={program.displayName} />
        ))}
        <Button>See more..</Button>
      </Menu>
    </div>
  );
}
