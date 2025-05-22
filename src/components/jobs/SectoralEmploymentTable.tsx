
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SectoralEmploymentTable = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3">Sektorale Beschäftigungsverteilung</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sektor</TableHead>
            <TableHead>Anteil (%)</TableHead>
            <TableHead>Trends</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Weinbau und Önologie</TableCell>
            <TableCell>7.8%</TableCell>
            <TableCell>Wachsend</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Agrotourismus</TableCell>
            <TableCell>5.3%</TableCell>
            <TableCell>Stark wachsend</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Handwerk und Kunsthandwerk</TableCell>
            <TableCell>8.6%</TableCell>
            <TableCell>Stabil</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Baugewerbe</TableCell>
            <TableCell>9.7%</TableCell>
            <TableCell>Leicht wachsend</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gastronomie und Hotellerie</TableCell>
            <TableCell>12.5%</TableCell>
            <TableCell>Wachsend</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lebensmittelproduktion</TableCell>
            <TableCell>6.4%</TableCell>
            <TableCell>Stabil</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground mt-2">
        Quelle: Handelskammer Marche, Branchenanalyse 2024; Regionale Wirtschaftsbeobachtungsstelle Marche
      </p>
    </div>
  );
};

export default SectoralEmploymentTable;
