
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InternationalWorkforceTable = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3">Internationale Arbeitskräfte</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Herkunft</TableHead>
            <TableHead>Anteil (%)</TableHead>
            <TableHead>Hauptsektoren</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>EU-Länder</TableCell>
            <TableCell>8.7%</TableCell>
            <TableCell>Tourismus, Gastronomie, Landwirtschaft</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Deutschland</TableCell>
            <TableCell>2.3%</TableCell>
            <TableCell>Weinbau, Tourismus, Beratung</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nicht-EU-Länder</TableCell>
            <TableCell>6.9%</TableCell>
            <TableCell>Landwirtschaft, Bau, Handwerk</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground mt-2">
        Quelle: ISTAT Migrationsbericht 2024; Arbeitsmarktanalyse Marche 2024
      </p>
    </div>
  );
};

export default InternationalWorkforceTable;
