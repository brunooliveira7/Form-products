import "./App.css";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle } from "lucide-react";

export function App() {
  return (
    // Main container
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        {/* Filter */}
        <form className="flex items-center gap-2">
          <Input className="w-auto" name="id" placeholder="Search by ID" />
          <Input
            className="w-auto"
            name="product"
            placeholder="Search by Product"
          />
          <Input
            className="w-auto"
            name="price"
            placeholder="Search by Price"
          />
          <Button
            className="cursor-pointer"
            type="submit"
            variant={"secondary"}
          >
            Search
          </Button>
        </form>
        <Button className="cursor-pointer">Add Product</Button>
      </div>
      {/* Table */}
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
