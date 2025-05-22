
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EconomicIndicatorsTable = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3">Wirtschaftliche Kennzahlen</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Indikator</TableHead>
            <TableHead>Marche Region</TableHead>
            <TableHead>Italien Durchschnitt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Arbeitslosenquote</TableCell>
            <TableCell>5.8%</TableCell>
            <TableCell>7.9%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>BIP pro Kopf</TableCell>
            <TableCell>€28,700</TableCell>
            <TableCell>€27,800</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Beschäftigung in der Landwirtschaft</TableCell>
            <TableCell>3.2%</TableCell>
            <TableCell>2.8%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Beschäftigung im Tourismus</TableCell>
            <TableCell>12.5%</TableCell>
            <TableCell>10.1%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wirtschaftswachstum</TableCell>
            <TableCell>2.1%</TableCell>
            <TableCell>1.8%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jugendarbeitslosigkeit</TableCell>
            <TableCell>18.4%</TableCell>
            <TableCell>23.7%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Durchschnittliches Monatsgehalt</TableCell>
            <TableCell>€1,580</TableCell>
            <TableCell>€1,650</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Selbstständigenquote</TableCell>
            <TableCell>21.3%</TableCell>
            <TableCell>18.5%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Beschäftigung in der Industrie</TableCell>
            <TableCell>29.4%</TableCell>
            <TableCell>26.2%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Beschäftigung im Dienstleistungssektor</TableCell>
            <TableCell>55.1%</TableCell>
            <TableCell>60.9%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Exportwachstum</TableCell>
            <TableCell>3.7%</TableCell>
            <TableCell>3.2%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground mt-2">
        Quelle: ISTAT (Italienisches Statistikamt), Stand: März 2025; Regione Marche Wirtschaftsbericht 2024/2025; Confindustria Marche Jahresanalyse 2024
      </p>
    </div>
  );
};

export default EconomicIndicatorsTable;
