import "./App.css";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="border rounded-md shadow-sm p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  <TableCell>Product {i}</TableCell>
                  <TableCell>$ {i * 10}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
