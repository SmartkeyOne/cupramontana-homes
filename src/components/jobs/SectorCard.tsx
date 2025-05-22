
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SectorCardProps {
  title: string;
  description: string;
  jobs: string[];
  salaries: Array<{position: string; salary: string}>;
  icon: ReactNode;
  jobSource: string;
  salarySource: string;
}

const SectorCard = ({ 
  title, 
  description, 
  jobs, 
  salaries, 
  icon, 
  jobSource, 
  salarySource 
}: SectorCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-2">
          {jobSource}
        </p>

        <div className="mt-4">
          <h4 className="font-medium mb-1 text-sm">Durchschnittliche Gehälter</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Monatlich (€)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salaries.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>{item.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-xs text-muted-foreground mt-1">
            {salarySource}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectorCard;
